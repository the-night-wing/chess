import React from 'react'

import "./board.css"

import Knight from "../knight"
import Square from "../square"


function renderSquare (i, [knightX, knightY], onSquareClick) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    const isBlack = (x + y) % 2 === 1;
    const isKnightHere = (knightX === x) && (knightY === y);
    const piece = isKnightHere ? <Knight/> : null

    return(            
            <Square
                setPosition={() => onSquareClick(x ,y)}
                black={isBlack}
                key={i}
            >
                {piece}
            </Square>            
    )
}

function Board ( {knightPosition, onSquareClick} ) {

    const squares = [];

    for(let i = 0; i < 64; i++){
        squares[i] = renderSquare(i, knightPosition, onSquareClick);
    }
    console.log(`Board pos: ${knightPosition}`)

    return (
        <div className="board">
            {squares}
        </div>
    )
}

export default Board