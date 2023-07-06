function squareOrSquareRoot(array) {
    let arr = []
    return array.map(function(item) {
      if(Number.isInteger(Math.sqrt(item)) === true) {
        return Math.sqrt(item)
      } else if(Number.isInteger(Math.sqrt(item)) === false) {
        return item ** 2
      }
    })
  }
  console.log(squareOrSquareRoot([4,3,9,7,2,1]))