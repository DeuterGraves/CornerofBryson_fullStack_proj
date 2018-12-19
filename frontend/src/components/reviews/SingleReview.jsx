import React from 'react';

const SingleReview =(props)=>{

  if (props.tag === "ATTRACTION"){

  return(
    <React.Fragment>
    <h2>{props.title}</h2>
    <p>by {props.author}</p>
    <div className="info-box">
      <img src={props.photo} alt={props.summary} height="250" />
      <p>Price: £{props.price}</p>
      <p>Address: {props.address}</p>
    </div>
    <p>review: {props.reviewText}</p>
    </React.Fragment>
  )

} else if (props.tag === "SHOP"){

    return(
      <React.Fragment>
      <h2>{props.title}</h2>
      <p>by {props.author}</p>
      <div className="info-box">
        <img src={props.photo} alt={props.summary} height="250" />
        <p>Address: {props.address}</p>
      </div>
      <p>review: {props.reviewText}</p>
      </React.Fragment>
    )

  } else if (props.tag === "RESTAURANT"){

    let restPrice = null
    if (props.price <= 10){
      restPrice = "£"
    }
    if ((props.price > 10) && (props.price <= 30)){
      restPrice = "££"
    }
    if ((props.price > 30) && (props.price <= 60)){
      restPrice = "£££"
    }
    if (props.price > 60){
      restPrice = "££££"
    }
    return(
      <React.Fragment>
      <h2>{props.title}</h2>
      <p>by {props.author}</p>
      <div className="info-box">
        <img src={props.photo} alt={props.summary} height="250" />
        <p> Price Range: {restPrice}</p>
        <p>Address: {props.address}</p>
      </div>
      <p>review: {props.reviewText}</p>
      </React.Fragment>
    )

  } else {

    return (
    <React.Fragment>
    <h2>{props.title}</h2>
    <p>by {props.author}</p>
    <div className="info-box">
      <img src={props.photo} alt={props.summary} height="250" />
      <p>Address: {props.address}</p>
    </div>
    <p>review: {props.reviewText}</p>
    </React.Fragment>
  )
  }

}

export default SingleReview;
