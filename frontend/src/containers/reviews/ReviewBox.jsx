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
      singleReview: 0,
      formType: null
    }
    this.onTagSelected = this.onTagSelected.bind(this);
    this.onReviewSelected = this.onReviewSelected.bind(this);
    this.handleReviewBack = this.handleReviewBack.bind(this);
    this.handleReviewPost = this.handleReviewPost.bind(this);
    this.onNewReview = this.onNewReview.bind(this);
    this.onEditReview = this.onEditReview.bind(this);
  }

  componentDidMount(){
    let request = new RequestHelper()
    request.get('/api/reviews').then((data) =>{
      this.setState({reviews:data._embedded.reviews})
    })
    .catch(console.error);
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

  handleReviewPost(review){
    console.log("review", review);
    const request = new RequestHelper();
    request.post('/api/reviews', review).then(() => {
      this.setState({filter: 'all'});
      this.setState({list: true});
      this.setState({singleReview: 0});
    })
  }


  onTagSelected(tag) {
    this.setState({filter: tag });
  }

  onReviewSelected(id){
    this.setState({singleReview: id});
    this.setState({list: false});
  }

  onNewReview(){
    this.setState({list: false})
    this.setState({formType: "new"})
  }

  onEditReview(id){
    this.setState({list: false})
    this.setState({formType: "edit"})
  }




  render(){

    return(
      <div>
      {this.state.list && <div><BusinessTagSelect onTagSelected={this.onTagSelected}
      reviews = {(this.state.reviews)} />
      <button onClick={this.onNewReview}>Add Review</button>
      </div>}
      <ReviewList
      showTag={this.state.filter}
      reviews = {this.state.reviews} onTagSelected={this.onTagSelected} onReviewSelected={this.onReviewSelected}
      singleReview ={this.state.singleReview}
      handleReviewBack = {this.handleReviewBack}
      formType={this.state.formType}
      handleReviewPost = {this.handleReviewPost}
      onEditReview = {this.onEditReview}
      />
      </div>
    )
  }


}

export default ReviewBox;
