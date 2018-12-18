import React from 'react';
import Review from './Review.jsx';
import BusinessTagSelect from './BusinessTagSelect.jsx';

const ReviewList = (props) =>{

  if (!props.reviews)  {
    return null;
  };

  const reviews = props.reviews.map((review) =>{
    return(
      <div>
      <Review
      key={review.id}
      title={review.title}
      summary={review.summary}
      photo={review.photo}
      tag = {review.tag}
       />
      </div>
    )
  })

  return(
    <div>
    < BusinessTagSelect reviews = {(props.reviews)} />
    {reviews}
    </div>
  )
}

export default ReviewList;
