const API_KEY = "0e6a71f8ff23a6618372b89e158e1c76";
const BASE_URL = "https://api.themoviedb.org/3";

(async () => {
  try {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Fetch error:", err);
    process.exit(1);
  }
})();
