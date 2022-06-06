export function calcTileType(index, boardSize) {
  switch(index) {
    case 0:
      return 'top-left';
    case 7:
      return 'top-right';
    case 56:
      return 'bottom-left';
    case 63:
      return 'bottom-right';
  }

  if((index % boardSize) === 0) {
    return 'left';
  }

  if((index % boardSize) === boardSize - 1) {
    return 'right';
  }

  if(index > 0 &&  index < boardSize - 1 ) {
    return 'top';
  } else if(index > (boardSize ** 2 - boardSize) && index < (boardSize ** 2 - 1)) {
    return 'bottom';
  } 
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
