import React from 'react';
import ReviewList from '../components/reviews/ReviewList.jsx';

import Request from "../helpers/request.js";

class ReviewBox extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      reviews:[]
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/reviews').then((data) =>{
      this.setState({reviews:data._embedded.reviews})
    })
  }

  render(){
    return(
      <div>
      Review Box!
      <ReviewList reviews = {this.state.reviews} />
      </div>
    )
  }


}

export default ReviewBox;
