import './reviews.css'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { fetchReviews } from '../../utils/async_functions';
import { Review } from '../../utils/async_functions';

export const Reviews = () => {

  const [review, setReview] = useState<Review>();

  const fetchAndSetReview = async () => {
    try {
      const numberOfReviews = 29;
      const reviews: Review[] = await fetchReviews();
      const randomNumber: number = Math.floor(Math.random() * numberOfReviews);
      setReview(reviews[randomNumber]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAndSetReview();
  }, []);
  
  return (
    <div className="review_container">
      <img className='review_img' src="/src/assets/reviewImg.png" alt="" />
      <div className="review_content">
        <div className="review_stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='review_description'>{review?.description}</p>
        <div className="client_data">
          <h4>{review?.name}</h4>
          <span>Client</span>
        </div>
      </div>
    </div>
  )
}
