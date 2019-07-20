import React from 'react'

import "./square.css"

const Square = ({black, children, setPosition}) => {

    const sqColor = black ? "black" : "white"
    const pieceColor = !black ? "black" : "white"

    return (
        <div 
            onClick={setPosition}
            className={`square`}
            style={
                {
                    backgroundColor: sqColor,
                    color : pieceColor,
                }
            }
        >
            {children}
        </div>
    )
}

export default Square
