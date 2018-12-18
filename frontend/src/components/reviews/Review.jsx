import React from 'react';

const Review = ({key, title, summary, photo}) =>{


  return(
    <React.Fragment>
    <p>{title}</p>
    <img src={photo} alt={summary} height="250" />
    <p>{summary}</p>
    </React.Fragment>
  )
}

export default Review;
