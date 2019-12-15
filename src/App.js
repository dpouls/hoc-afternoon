import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Exchanged from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <>
      <h2>High Order Component</h2>
        <Exchanged/>
      </>
    );
  }
}

export default App;
