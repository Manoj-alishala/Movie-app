const API_KEY = "0e6a71f8ff23a6618372b89e158e1c76"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    console.debug("getPopularMovies response:", data);
    return data.results || [];
}

export const searchMovies = async (query) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    console.debug("searchMovies response:", data);
    return data.results || [];
}