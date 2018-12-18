import React from 'react';
import ReviewList from '../../components/reviews/ReviewList.jsx';
import Header from '../../components/Header.jsx';
import BusinessTagSelect from '../../components/reviews/BusinessTagSelect.jsx';

import RequestHelper from "../../helpers/request_helper.js";

class ReviewBox extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      reviews:[],
      filter: 'all'
    }
    this.onTagSelected = this.onTagSelected.bind(this);
  }

  onTagSelected(tag) {
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
      <BusinessTagSelect onTagSelected={this.onTagSelected} reviews = {(this.state.reviews)}/>
      <ReviewList showTag={this.state.filter} reviews = {this.state.reviews} onTagSelected={this.onTagSelected}/>
      </div>
    )
  }


}

export default ReviewBox;
