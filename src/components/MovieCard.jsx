import '../css/MovieCard.css';
import '../css/Toast.css';
import { useState } from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import Toast from './Toast';


    export function MovieCard({ movie }) {

        const {
            addFavorites,
            removeFavorites,
            isFavorite
        } = useMovieContext();

        const favorite = isFavorite(movie.id);

        const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

        function showToast(message, type = 'success', position = 'bottom-right') {
            setToast({ show: true, message, type, position });
            setTimeout(() => setToast((t) => ({ ...t, show: false })), 2500);
        }

        function onFavClick(e) {
            e.preventDefault();
            if (favorite) {
                removeFavorites(movie);
                showToast(`You unfav the ${movie.title}!`, 'error', 'top-right');
                return;
            }

            // re-check in handler to avoid race/edge cases where `favorite` may be stale
            if (isFavorite(movie.id)) {
                showToast(`Already added to fav`, 'info', 'top-right');
                return;
            }

            addFavorites(movie);
            showToast(`Added \"${movie.title}\" to favorites`, 'success', 'bottom-right');
        }

        const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
        const posterSrc = movie.poster_path
        ? `${IMAGE_BASE}${movie.poster_path}`
        : movie.url || "https://via.placeholder.com/300x450?text=No+Image";

        return (
            <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={posterSrc} alt={movie.title} />

                    <div className="movie-overlay">
                        <button className={`favorite-btn ${favorite ? 'active' : ""}`} onClick={onFavClick}>♥</button>
                    </div>
                </div>

                <div className="movie-info">
                    <div className='title-and-rating'>
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date?.split('-')[0]}</p>
                    </div>
                    <p className="movie-rating">⭐ {movie.vote_average}</p> 
                </div>

            </div>
            <Toast show={toast.show} message={toast.message} type={toast.type} position={toast.position} />
            </>
        );
    }

    export default MovieCard;
