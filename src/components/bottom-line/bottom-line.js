import React, { Component } from 'react';
import './bottom-line.css';
import bg from "./bg.png";
import StartButton from '../start-button';
import Clock from '../clock';


export default class BottomLine extends Component {

    render() {
        return ( 
            <div className="footer" style={{ backgroundImage: `url(${bg})`,
            backgroundRepeat: 'repeat-x' }}>
                <StartButton/>
                <Clock/>
            </div>
        );
    }
  };
