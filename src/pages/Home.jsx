import MovieCard from "../components/MovieCard.jsx";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const loadPopularMovies = async () => {
        setLoading(true);
        try {
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies || []);
        } catch (err) {
          setError("Failed to load movies.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
      e.preventDefault();
      if (!searchQuery.trim()) {
      if (loading) return;
        // if query empty, reload popular
        const popular = await getPopularMovies();
        setMovies(popular);
        return;
      }
      setLoading(true);
      try {
        const results = await searchMovies(searchQuery);
        setMovies(results);
      } catch (err) {
        setError("Search failed.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search for movies..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

      {loading && <div className="loading"></div>}
      {error && <div className="error">{error}</div>}

      {loading ? (<div className="loading">Loading movies...</div>) : (
      <div className="movies-grid">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies
            .filter((movie) => (movie.title || "").toLowerCase().includes(searchQuery.toLowerCase()))
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <div className="no-results">No movies found.</div>
        )}
      </div> )}
    </div>
  );
}

export default Home;
