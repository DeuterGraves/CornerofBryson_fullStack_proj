import React from 'react';
import ReviewList from '../components/reviews/ReviewList.jsx';

import RequestHelper from "../helpers/request_helper.js";

class ReviewBox extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      reviews:[]
    }
  }

  componentDidMount(){
    let request = new RequestHelper()
    request.get('/api/reviews').then((data) =>{
      this.setState({reviews:data._embedded.reviews})
    })
    .catch(console.error);
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
