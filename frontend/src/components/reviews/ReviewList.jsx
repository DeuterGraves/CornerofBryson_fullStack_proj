import React from 'react';
import Review from './Review.jsx';
import SingleReview from './SingleReview.jsx';
import NewReview from './NewReview.jsx';

const ReviewList = (props) =>{

  const onDelete = () => {
    props.handleReviewDelete(props.review.id)
  }

  const onEdit = () => {
    props.handleEdit(props.review.id)
  }

  const onBack = ()  =>{
    props.handleReviewBack()
  }

  if (!props.reviews)  {
    return null;
  };

  // console.log("singleReview", props.singleReview);
  if ((props.singleReview === 0) && (props.isNewReview === false) ){

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
  }else if (props.singleReview > 0){

    const oneReview = props.reviews
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
        <button onClick={onDelete}>Delete Review</button>
        <button onClick={onEdit}>Edit Review</button>
        <button onClick={onBack}>See All Reviews</button>
        </div>
      )
    })

    return(
      <div>
      {oneReview}
      </div>
    )

  } else if (props.isNewReview === true){
    return(
      <div>
      <NewReview reviews={props.reviews} handleReviewPost={props.handleReviewPost} />
      </div>
    )
  }



  }




export default ReviewList;
