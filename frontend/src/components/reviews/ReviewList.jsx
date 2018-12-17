import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) =>{
  const reviews = props.reviews.map((review) =>{
    return(
      <div>
      ReviewList
      <Review title={review.title} />
      </div>
    )
  })

  return(
    <div>
    Review List!
    {reviews}
    </div>
  )
}

export default ReviewList;
