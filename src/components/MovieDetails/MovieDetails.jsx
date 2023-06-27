import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation, NavLink } from 'react-router-dom';
import { getMovieDetails, getMovieReviews } from '../API/API';
import css from './MovieDetails.module.css';
import iconBack from '../images/icon-back.png';
import loader from '../images/loader.gif';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const [previousPage] = useState(location.state?.from ?? '/');

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
    return <div><img src={loader} alt="Loader"/></div>;
  }

  const userScore = movie.vote_average
    ? `${(movie.vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';


  const trimmedTitle = movie.title.length > 40 ? `${movie.title.substring(0, 40)}...` : movie.title;

  return (
    <div className={css.mainMovieDetails}>
      <NavLink to={previousPage} className={css.backBtn}>
        <img src={iconBack} alt="Back" className={css.backBtnImage} />Back
      </NavLink>
      <div className={css.movieContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={css.movieImg}
        />
        <div className={css.movieData}>
          <ul className={css.movieInfo}>
            <h2 className={css.movieTitle}>{trimmedTitle}</h2>
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
                <span className={css.boldText}>Genres:</span>{' '}
                {movie.genres.map((genre) => genre.name).join(', ')}
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
              <Link to={`/movies/${movieId}/cast`} className={css.movieExtraLink}>
                Cast
              </Link>
            </li>
            <li className={css.movieExtraItem}>
              <Link to={`/movies/${movieId}/reviews`} className={css.movieExtraLink}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
        {reviews && reviews.length > 0 && (
          <div>
            <h3>Reviews</h3>
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>{review.content}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
