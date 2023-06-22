import React from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';

const Home = React.lazy(() => import('./Home'));
const Movies = React.lazy(() => import('./Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails'));
const Cast = React.lazy(() => import('./Cast'));
const Reviews = React.lazy(() => import('./Reviews'));
const Layout = React.lazy(()=> import('./Layout'));

const App = () => {
  return (
    <div className={css.mainContainer}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
    </div>
  );
};

export default App;
