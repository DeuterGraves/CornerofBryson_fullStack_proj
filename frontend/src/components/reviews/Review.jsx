import React from 'react';

const Review = ({key, title, summary, photo, id, onReviewSelected}) =>{

// function is going to be for the click
function handleReviewSelect(){
  onReviewSelected(id);
}

  return(
    <React.Fragment >
    <h3 onClick={handleReviewSelect} className="summary-title">{title}</h3>
    <img src={photo} alt={summary} width="300" onClick={handleReviewSelect} />
    <p>{summary}</p>
    </React.Fragment>
  )
}

export default Review;
