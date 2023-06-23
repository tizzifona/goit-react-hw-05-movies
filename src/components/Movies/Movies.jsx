import React, { useState, useEffect, useCallback } from 'react';
import {  Link, useSearchParams } from 'react-router-dom';
import { searchMoviesByKeyword } from '../API/API';
import css from './Movies.module.css';
import Notiflix from 'notiflix';
import searchButton from '../images/icon-search.png';

const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchByKeyword = useCallback(async (searchKeyword) => {
    if (!searchKeyword) {
      return;
    }

    const searchResults = await searchMoviesByKeyword(searchKeyword);
    if (searchResults.length === 0) {
      Notiflix.Notify.failure('Sorry, nothing was found!');
    } else {
      setMovies(searchResults);
      setSearchParams({ query: searchKeyword });
      setKeyword('');
    }
  }, [setSearchParams]);

  useEffect(() => {
    const searchKeyword = searchParams.get('query') || '';
    if (searchKeyword) {
      handleSearchByKeyword(searchKeyword);
    }
  }, [searchParams, handleSearchByKeyword]);

  const truncateTitle = (title) => {
    if (title.length > 25) {
      return title.slice(0, 25) + '...';
    }
    return title;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    handleSearchByKeyword(keyword);
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
            <Link to={`/movies/${movie.id}`} className={css.moviesLink}>
              {truncateTitle(movie.title)}
              {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.moviesImg} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;






