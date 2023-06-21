import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../API/API';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const reviews = await getMovieReviews(movieId);
      setReviews(reviews);
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <p className={css.separator}></p>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      {reviews.length === 0 ? (
        <p className={css.noReviewsText}>There are no reviews yet!</p>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map((review) => (
            <li key={review.id} className={css.reviewsListItem}>
              <h3 className={css.reviewsAuthor}>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
