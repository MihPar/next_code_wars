function squareArea(A){
    return Number(Math.pow((A * 4) / (Math.PI * 2), 2).toFixed(2));
  }
  console.log(squareArea(14.05))