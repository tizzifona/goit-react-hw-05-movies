import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './Layout.module.css';
import logoImage from '../images/icon-logo.png';
import scrollToTopImage from '../images/button-up.png';
import loader from '../images/loader.gif';

const Layout = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = 200;
      if (scrollTop > scrollThreshold) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleMoviesLinkClick = () => {
    if (location.pathname === '/movies') {
      setKey(prevKey => prevKey + 1);
    }
  };

  return (
    <div className={css.layoutContainer}>
      <div className={css.logoContainer}>
        <Link to="/"><img src={logoImage} alt="Logo" className={css.logoImage} /></Link>
      </div>
      <header className={css.header}>
        <ul className={css.navigationList}>
          <li className={css.navigationItem}>
            <Link to="/" className={css.navigationLink}>Home</Link>
          </li>
          <li className={css.navigationItem}>
            <Link
              to="/movies"
              className={css.navigationLink}
              onClick={handleMoviesLinkClick}
            >
              Movies
            </Link>
          </li>
        </ul>
      </header>

      <main>
        <Suspense key={key} fallback={<div><img src={loader} alt="Loader"/></div>}>
          <Outlet />
        </Suspense>
      </main>

      {showScrollToTop && (
        <button className={css.scrollToTopButton} onClick={handleScrollToTop}>
          <img src={scrollToTopImage} alt="Scroll to Top" className={css.scrollToTopImage} />
        </button>
      )}
    </div>
  );
};

export default Layout;
