import React from 'react';
import ReviewList from '../../components/reviews/ReviewList.jsx';
import BusinessTagSelect from '../../components/reviews/BusinessTagSelect.jsx';

import RequestHelper from "../../helpers/request_helper.js";

class ReviewBox extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      reviews:[],
      filter: 'all',
      list: true,
      singleReview: 0
    }
    this.onTagSelected = this.onTagSelected.bind(this);
    this.onReviewSelected = this.onReviewSelected.bind(this);
  }

  onTagSelected(tag) {
    this.setState({filter: tag });
  }

  onReviewSelected(id){
    this.setState({singleReview: id})
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
      {this.state.list && <BusinessTagSelect onTagSelected={this.onTagSelected}
      reviews = {(this.state.reviews)} />}
      <ReviewList
      showTag={this.state.filter}
      reviews = {this.state.reviews} onTagSelected={this.onTagSelected} onReviewSelected={this.onReviewSelected}
      singleReview ={this.state.singleReview}/>
      </div>
    )
  }


}

export default ReviewBox;
