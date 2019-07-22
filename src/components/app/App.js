import React, {Component} from 'react';
import {DndProvider} from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"

import './App.css';

import Board from "../board"

import {canMoveKnight} from "../../helpers/canMoveKnight.js"


export default class App extends Component {

  state = {
    knightPosition : [0, 1]
  }

  setPosition = (toX, toY) => {
    if (canMoveKnight(toX, toY, this.state.knightPosition)) {
      this.setState({
        knightPosition : [toX, toY]
      })
    }
  }

  render(){

    const { knightPosition } = this.state;

    return (
      
      <DndProvider
      backend={HTML5Backend}
      >
        <Board 
          knightPosition={knightPosition} 
          onSquareClick={(x, y) => this.setPosition( x, y )}  
        />
      
      </DndProvider>
    );
  }
  
}
