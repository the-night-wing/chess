import React from 'react'

import "./board.css"

import Knight from "../knight"
import Square from "../square"

function renderSquare (i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    const isBlack = (x + y) % 2 === 1;
    console.log(isBlack);
    console.log(x);
    console.log(y);
    const isKnightHere = (knightX === x) && (knightY === y);
    const piece = isKnightHere ? <Knight/> : null

    return(
            <Square
                black={isBlack}
                key={i}
            >
                {piece}
            </Square>
    )
}

function Board ( {knightPosition} ) {

    const squares = [];

    for(let i = 0; i < 64; i++){
        squares[i] = renderSquare(i, knightPosition)
    }

    return (
        <div className="board">
            {squares}
        </div>
    )
}

export default Board