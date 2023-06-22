import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../API/API';
import css from './Home.module.css';
const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    const movies = await getTrendingMovies();
    setTrendingMovies(movies);
  };

  const truncateTitle = (title) => {
    if (title.length > 25) {
      return title.slice(0, 25) + '...';
    }
    return title;
  };

  return (
    <div className={css.homeContainer}>
      <h1 className={css.textHeader}>Trending Movies</h1>
      <ul className={css.homeList}>
        {trendingMovies.map((movie) => (
          <li key={movie.id} className={css.homeItem}>
            <Link to={`/movies/${movie.id}`} className={css.homeLink}>
              {truncateTitle(movie.title)}
              {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.homeImg} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
