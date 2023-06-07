function squareSum(numbers){
    
    return numbers.reduce(function(accum, item) {
      return accum + item ** 2
    }, 0)
  }