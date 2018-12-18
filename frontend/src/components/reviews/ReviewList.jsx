import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) =>{

  if (!props.reviews)  {
    return null;
  };

  const reviews = props.reviews
  .filter((review) => props.showTag === 'all' || review.tag === props.showTag)
  .map((review) =>{
    return(
      <div key={review.id}>
      <Review
      title={review.title}
      summary={review.summary}
      photo={review.photo}
      tag = {review.tag}
      id = {review.id}
      onReviewSelected={props.onReviewSelected} />
      </div>
    )
  })

  return(
    <div>
    {reviews}
    </div>
  )
}

export default ReviewList;
