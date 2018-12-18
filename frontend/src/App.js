import React, { Component } from 'react';
import Header from './components/Header.jsx';
import ReviewBox from "./containers/reviews/ReviewBox.jsx"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Review-App">
      <Header />
      <ReviewBox />
      </div>
    );
  }
}

export default App;
