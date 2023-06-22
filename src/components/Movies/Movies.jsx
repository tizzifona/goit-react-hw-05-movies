import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMoviesByKeyword } from '../API/API';
import css from './Movies.module.css';
import Notiflix from 'notiflix';
import searchButton from '../images/icon-search.png';
const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const searchMovies = async () => {
      const movies = await searchMoviesByKeyword(keyword);
      setMovies(movies);
    };
    searchMovies();
  }, [keyword]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!keyword) {
      Notiflix.Notify.failure('Please enter something');
    } else {
      const searchResults = await searchMoviesByKeyword(keyword);
      if (searchResults.length === 0) {
        Notiflix.Notify.failure('Sorry, nothing was found!');
      } else {
        setMovies(searchResults);
        navigate(`/movies?keyword=${keyword}`);
      }
    }
  };

  const truncateTitle = (title) => {
    if (title.length > 25) {
      return title.slice(0, 25) + '...';
    }
    return title;
  };

  return (
    <div className={css.moviesContainer}>
      <h1 className={css.moviesTitle}>Search Movies</h1>
      <form className={css.searchForm} onSubmit={handleSearch}>
        <input
          className={css.moviesInput}
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className={css.searchBtn} type="submit">
          <img src={searchButton} alt="Search Button" className={css.searchImg} />
        </button>
      </form>
      <ul className={css.moviesList}>
        {movies.map((movie) => (
          <li className={css.moviesItem} key={movie.id}>
            <a href={`/goit-react-hw-05-movies/movies/${movie.id}`} className={css.moviesLink}>
              {truncateTitle(movie.title)}
              {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.moviesImg} />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
