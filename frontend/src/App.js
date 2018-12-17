import React, { Component } from 'react';
import ReviewBox from "./containers/ReviewBox.jsx"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Review-App">
      Reviews!
      <ReviewBox />
      </div>
    );
  }
}

export default App;
