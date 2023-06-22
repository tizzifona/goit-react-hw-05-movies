import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import logoImage from '../images/icon-logo.png';
import scrollToTopImage from '../images/button-up.png';
const Layout = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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

  return (
    <div className={css.layoutContainer}>
      <div className={css.logoContainer}>
        <img src={logoImage} alt="Logo" className={css.logoImage} />
      </div>
      <header className={css.header}>
        <ul className={css.navigationList}>
          <li className={css.navigationItem}>
            <Link to="/" className={css.navigationLink}>Home</Link>
          </li>
          <li className={css.navigationItem}>
            <Link to="/movies" className={css.navigationLink}>Movies</Link>
          </li>
        </ul>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
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
