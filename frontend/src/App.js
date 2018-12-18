import React, { Component } from 'react';
import ReviewBox from "./containers/reviews/ReviewBox.jsx"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Review-App">
      <ReviewBox />
      </div>
    );
  }
}

export default App;
