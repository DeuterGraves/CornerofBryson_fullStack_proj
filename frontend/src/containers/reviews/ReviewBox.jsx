import React from 'react';
import ReviewList from '../../components/reviews/ReviewList.jsx';
import Header from '../../components/Header.jsx';

import RequestHelper from "../../helpers/request_helper.js";

class ReviewBox extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      reviews:[],
      filter: 'all'
    }
    this.setTagFilter = this.setTagFilter.bind(this);
  }

  setTagFilter(tag) {
    this.setState({filter: tag });
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
      <Header />
      <ReviewList showTag={this.state.filter} reviews = {this.state.reviews} onTagSelected={this.setTagFilter}/>
      </div>
    )
  }


}

export default ReviewBox;
