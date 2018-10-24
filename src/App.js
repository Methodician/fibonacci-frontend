import React, { Component } from 'react';

import FibonacciDisplay from './components/FibonacciDisplay/FibonacciDisplay';
import FibonacciUI from './components/FibonacciUI/FibonacciUI';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <FibonacciDisplay></FibonacciDisplay>
        <FibonacciUI></FibonacciUI>
      </div>
    );
  }
}

export default App;
