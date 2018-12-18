import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) =>{

  if (!props.reviews)  {
    return null;
  };

console.log("singleReview", props.singleReview);
if (props.singleReview === 0){
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
}else{

  return(
    <p> review picked</p>
  )

}

}

export default ReviewList;
