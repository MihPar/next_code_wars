function findAverage(array) {
    if(array.length === 0) {
      return 0
    } 
    return array.reduce(function(accum, item) {
      return accum + item
    }, 0) / array.length
  }