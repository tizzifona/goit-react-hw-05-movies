import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../API/API';
import css from './Cast.module.css';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const credits = await getMovieCredits(movieId);
        setCast(credits);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      <p className={css.separator}></p>
      <h2 className={css.castTitle}>Cast</h2>

      {cast.length ? (
        <ul className={css.castList}>
          {cast.map(actor => (
            <li key={actor.id} className={css.castItem}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Image`}
                  alt={`${actor.name} profile`}
                />
              )}
              <div>
                <p className={css.castItemName}>{actor.name}</p>
                <p className={css.castItemText}>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noCastName}>We don't have any information about the cast yet.</p>
      )}
    </div>
  );
};
export default Cast;
