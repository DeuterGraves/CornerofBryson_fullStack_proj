import React from 'react';
import Review from './Review.jsx';
import SingleReview from './SingleReview.jsx';
import NewReview from './NewReview.jsx';
import EditReview from './EditReview.jsx';

const ReviewList = (props) =>{

  const onDelete = () => {
    // console.log("ondelete", {id});
    props.handleReviewDelete()
  }

  const onEdit = () => {
    props.onEditReview()
    // console.log("edit event value", {review});
  }

  const onBack = ()  =>{
    props.handleReviewBack()
  }

  if ((props.singleReview === 0) && (props.formType === null) ){

    // console.log("running all reviews  case");

    const reviews = props.reviews
    .filter((review) => props.showTag === 'all' || review.tag === props.showTag)
    .map((review) =>{

      return(
        <div key={review.id} className = "review-item">
        <Review
        title={review.title}
        summary={review.summary}
        photo={review.photo}
        tag = {review.tag}
        id = {review.id}
        onReviewSelected={props.onReviewSelected}
        />
        </div>
      )
    })

    return(
      <div className="review-list">
      {reviews}
      </div>
    )
  } else if ((props.singleReview > 0) && (props.formType === null)){

    // console.log("running single review case");

    const oneReview = props.reviews
    .filter((review) => props.singleReview === review.id)
    .map((review) =>{
      console.log("review", review);

      return(
        <div key={review.id} className = "single-review">
        <SingleReview
        title={review.title}
        summary={review.summary}
        photo={review.photo}
        tag = {review.tag}
        id = {review.id}
        price= {review.price}
        address ={review.address}
        reviewText = {review.reviewText}
        author = {review.user.name}
        />
        <button value ={review.id} onClick={onDelete}>Delete Review</button>&nbsp;&nbsp;
        <button value = {oneReview} onClick={onEdit}>Edit Review</button> &nbsp;&nbsp;
        <button onClick={onBack}>See All Reviews</button>
        </div>
      )
    })

    return(
      <div>
      {oneReview}
      </div>
    )

  } else if (props.formType === "new"){
    // console.log("running new case");
    return(
      <div className = "new-form">
      <NewReview reviews={props.reviews} handleReviewPost={props.handleReviewPost} />
      <button onClick={onBack}>See All Reviews</button>
      </div>
    )
  } else if (props.formType === "edit"){
    // console.log("running edit case");
    // console.log("edit props", props);

    const oneReview = props.reviews
    .filter((review) => props.singleReview === review.id)
    .map((review) =>{
      console.log("review", review);

      return(
        <div key={review.id} className='edit-form'>
        <EditReview
        reviews={props.reviews}
        title={review.title}
        summary={review.summary}
        photo={review.photo}
        tag = {review.tag}
        type={review.type}
        id = {review.id}
        price= {review.price}
        address ={review.address}
        reviewText = {review.reviewText}
        author = {review.user.name}
        user_id = {review.user_id}
        handleReviewPatch={props.handleReviewPatch}
        handleReviewDelete={props.handleReviewDelete}
        />
        <button onClick={onBack}>See All Reviews</button>
        </div>
      )
    })

    return(
      <div>
      {oneReview}
      </div>
    )

  }

}

export default ReviewList;
