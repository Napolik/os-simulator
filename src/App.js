import './App.css';
import React, { Component } from 'react';
import BottomLine from './components/bottom-line/bottom-line';
import WorkArea from './components/work-area/';

export default class App extends Component {

  state = {
    start_button: 0
}

  //onToggle = (start_button) => {
  //  this.setState({start_button});
  //  console.log(start_button);
  //};

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <WorkArea/>
          <BottomLine/>
        </div>
      </div>
    );
  }
  
}
