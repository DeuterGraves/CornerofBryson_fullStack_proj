import React from 'react';

const Review = (props) =>{
  if(!props.review){
    return null;
  }

  return(
    <React.Fragment>
    console.log(props.review);
    <p>A Review! {props.review.title}</p>
    </React.Fragment>
  )
}

export default Review;
