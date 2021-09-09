import React, { Component } from 'react';
import './start-button.css';

export default class StartButton extends Component {
    constructor(){
        super();
        this.state = {
             bg_img: true
        }
   }
    changeBg(){
        this.setState({bg_img: !this.state.bg_img});
    }

    render() {    
        let btn_class = this.state.bg_img ? "blackButton" : "whiteButton";
        return ( 
            <button 
            type="button" 
            className={`btn start-button ${btn_class}`}
            onClick={this.changeBg.bind(this)}
            ></button>
        );
    }
  };
