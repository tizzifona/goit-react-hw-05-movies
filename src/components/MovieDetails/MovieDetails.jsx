import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails, getMovieReviews } from '../API/API';
import css from './MovieDetails.module.css';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const details = await getMovieDetails(movieId);
      const movieReviews = await getMovieReviews(movieId);

      setMovie(details);
      setReviews(movieReviews.results);
    };

    fetchMovieData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const userScore = movie.vote_average
    ? `${(movie.vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';

  return (
    <div className={css.movieContainer}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.movieImg} />
      <div className={css.movieData}>
        <ul className={css.movieInfo}>
          <h2 className={css.movieTitle}>
            {movie.title}
          </h2>
          <li className={css.movieItem}>
            <p>
              <span className={css.boldText}>Rating:</span> {userScore}
            </p>
          </li>
          <li className={css.movieOverview}>
            <p>{movie.overview}</p>
          </li>
          <li className={css.movieItem}>
            <p>
              <span className={css.boldText}>Genres:</span> {movie.genres.map((genre) => genre.name).join(', ')}
            </p>
          </li>
          <li className={css.movieItem}>
            <p>
              <span className={css.boldText}>Release Date:</span> {movie.release_date}
            </p>
          </li>
        </ul>
        <h3 className={css.additionalTitle}>Additional information</h3>
        <ul className={css.movieExtraDetails}>
          <li className={css.movieExtraItem}>
            <Link to={`/movies/${movieId}/cast`} className={css.movieExtraLink}>Cast</Link>
          </li>
          <li className={css.movieExtraItem}>
            <Link to={`/movies/${movieId}/reviews`} className={css.movieExtraLink}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
      {reviews && reviews.length > 0 && (
        <div>
          <h3>Reviews</h3>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>Content: {review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;


