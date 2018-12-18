import React from 'react';

const Review = ({key, title, summary, photo, id, onReviewSelected}) =>{

// function is going to be for the click
function handleReviewSelect(){
  onReviewSelected(id);
}

  return(
    <React.Fragment>
    <p onClick={handleReviewSelect}>{title}</p>
    <img src={photo} alt={summary} height="250" />
    <p>{summary}</p>
    </React.Fragment>
  )
}

export default Review;
