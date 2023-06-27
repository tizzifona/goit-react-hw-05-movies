import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { searchMoviesByKeyword } from '../API/API';
import Notiflix from 'notiflix';
import css from './Movies.module.css';
import searchButton from '../images/icon-search.png';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('query') ?? '';

  const handleSearch = event => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      Notiflix.Notify.warning('Please, enter something');
    } else {
      fetchMovies();
    }
  };

  const fetchMovies = async () => {
    const searchResults = await searchMoviesByKeyword(searchQuery);
    if (searchResults.length === 0) {
      Notiflix.Notify.failure('Oooops, nothing was found');
    } else {
      setMovies(searchResults);
      setSearchParams({ query: searchQuery });
      setSearchQuery('');
    }
  };

  const truncateTitle = title => {
    if (title.length > 25) {
      return title.slice(0, 25) + '...';
    }
    return title;
  };

  useEffect(() => {
    const fetchPreviousMovies = async () => {
      if (searchKeyword) {
        const searchResults = await searchMoviesByKeyword(searchKeyword);
        setMovies(searchResults);
      }
    };

    fetchPreviousMovies();
  }, [searchKeyword]);

  return (
    <div className={css.moviesContainer}>
      <h1 className={css.moviesTitle}>Search Movies</h1>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.moviesInput}
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search movies"
        />
        <button className={css.searchBtn} type="submit"> <img src={searchButton} alt="Search Button" className={css.searchImg} />
        </button>
      </form>

      <ul className={css.moviesList}>
        {movies &&
          movies.map(({ id, title, poster_path }) => (
            <li className={css.moviesItem} key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }} className={css.moviesLink} >
                {truncateTitle(title)}
                {poster_path && (
                  <img
                    className={css.moviesImg}
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    width="200"
                    height="auto"
                  />
                )}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
