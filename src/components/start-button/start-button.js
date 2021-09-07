import React, { Component } from 'react';
import './start-button.css';
import start_bg from "./start-button.png";

export default class StartButton extends Component {

    render() {
        return ( 
            <button 
            type="button" 
            className="btn start-button"
            style={{ backgroundImage: `url(${start_bg})` }}
            ></button>
        );
    }
  };
