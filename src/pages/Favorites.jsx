import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";



function Favorites() {

    const { favorites } = useMovieContext();
    
    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites-container">      
                <h2 className="favorites-title">Your Favorite Movies</h2>
                <div className="favorites-grid">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} isFavorite={true} 
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorites Movies Yet</h2>
            <p>Start adding movies to your favorites list!</p>
        </div>
    )
}

export default Favorites;