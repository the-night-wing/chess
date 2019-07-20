import React, {Component} from 'react';
import './App.css';

import Board from "../board"


export default class App extends Component {

  state = {
    knightPosition : [0, 0]
  }

  setPosition = (x, y) => {
    this.setState( (state) => {
      if(
          (
            ( Math.abs(x - state.knightPosition[0]) === 1 ) 
          && 
            ( Math.abs(y - state.knightPosition[1]) === 2 )
          ) ||
          (
            ( Math.abs(x - state.knightPosition[0]) === 2 ) 
          && 
            ( Math.abs(y - state.knightPosition[1]) === 1 )
          )
        ){
          return({
            knightPosition : [x, y]
          })
        }
    })
  }

  render(){

    const { knightPosition } = this.state;

    return (
      <Board 
        knightPosition={knightPosition} 
        onSquareClick={(x, y) => this.setPosition( x, y )}  
      />
    );
  }
  
}

