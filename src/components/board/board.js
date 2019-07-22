import React from 'react'

import "./board.css"

import Knight from "../knight"
import Square from "../square"

import {canMoveKnight} from "../../helpers/canMoveKnight.js"

import {useDrop} from "react-dnd"
import {ItemTypes} from "../constants.js"

const SquareWrapper = ({props : [i, knightPosition, movePiece]}) => {

    const [knightX, knightY] = knightPosition;

    const x = i % 8;
    const y = Math.floor(i / 8);

    const isBlack = (x + y) % 2 === 1;
    const isKnightHere = (knightX === x) && (knightY === y);
    const piece = isKnightHere ? <Knight/> : null

    const [{ isOver, canDrop}, drop] = useDrop({
        accept : ItemTypes.KNIGHT,
        canDrop : () => canMoveKnight(x, y, knightPosition),
        drop: () => movePiece(x, y),
        collect: monitor => ({
            isOver : !!monitor.isOver(),
            canDrop : !!monitor.canDrop()
        }),
    })

    

    

    return(
        <div
            ref={drop}
            key={i}
            style={{
                position: "relative",
                width : "12.5%",
                height : "12.5%"     }}
        >
            <Square
                black={isBlack}
            >
                    {piece}
            </Square>
            {isOver && canDrop && <Overlay color="green"/>}
            {isOver && !canDrop && <Overlay color="red"/>}
            {!isOver && canDrop && <Overlay color="yellow"/>}
        </div>
    )
}

const Overlay = ({color}) => {

    const squareHoverStyles = {
        opacity: 0.5,
        position: 'absolute',
        top : 0,
        left : 0,
        backgroundColor : color,
        width : "100%",
        height : "100%",
        zIndex : 1
    }

    return(
        <div style={squareHoverStyles}></div>
    )
}

function Board ( {knightPosition, onSquareClick} ) {

    const squares = [];


    for(let i = 0; i < 64; i++){
        squares[i] = <SquareWrapper props={[i, knightPosition, onSquareClick]} />
        // renderSquare(i, knightPosition, onSquareClick);
    }
    console.log(`Board pos: ${knightPosition}`)

    return (
        // <DndProvider
        //     backend={HTML5Backend}
        // >
            <div className="board">
                {squares}
            </div>
        // </DndProvider>
    )
}

export default Board