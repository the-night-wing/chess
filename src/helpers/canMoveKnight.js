const canMoveKnight = (toX, toY, knightPosition) => {

    const [x, y] = knightPosition
  
    const dx = toX - x;
    const dy = toY - y;
  
    return(
      ( ( Math.abs(dx) === 1 ) && ( Math.abs(dy) === 2 ) ) 
      ||
      ( ( Math.abs(dx) === 2 ) && ( Math.abs(dy) === 1 ) )
    )
  
  }

export {canMoveKnight}