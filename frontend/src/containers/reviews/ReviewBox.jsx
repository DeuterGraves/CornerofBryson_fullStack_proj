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
    this.handleReviewBack = this.handleReviewBack.bind(this);
  }

  handleReviewDelete(id){
    const request = new RequestHelper();
    const url = '/api/reviews' + id;
    request.delete(url).then(() =>{
      // show all (remaining)reviews
      this.setState({filer: 'all'});
      this.setState({list: true});
      this.setState({singleReview: 0});
    })
  }

  handleReviewBack(){
    this.setState({filer: 'all'});
    this.setState({list: true});
    this.setState({singleReview: 0});
  }



  onTagSelected(tag) {
    this.setState({filter: tag });
  }

  onReviewSelected(id){
    this.setState({singleReview: id})
    this.setState({list: false})
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
      singleReview ={this.state.singleReview}
      handleReviewBack = {this.handleReviewBack}
      />
      </div>
    )
  }


}

export default ReviewBox;
