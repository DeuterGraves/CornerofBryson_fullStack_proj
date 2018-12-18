import React from 'react';
import Review from './Review.jsx';
import SingleReview from './SingleReview.jsx';

const ReviewList = (props) =>{

  if (!props.reviews)  {
    return null;
  };

  // console.log("singleReview", props.singleReview);
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

    const onereview = props.reviews

    .filter((review) => props.singleReview === review.id)
    .map((review) =>{
      console.log("review", review);

      return(
        <div key={review.id}>
        <SingleReview
        title={review.title}
        summary={review.summary}
        photo={review.photo}
        tag = {review.tag}
        id = {review.id}
        price= {review.price}
        address ={review.address}
        reviewText = {review.reviewText}
        author = {review.user.name}/>
        </div>
      )
    })

    return(
      <div>
      {onereview}
      </div>
    )

    }



  }




export default ReviewList;
