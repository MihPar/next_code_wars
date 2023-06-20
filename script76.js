function betterThanAverage(classPoints, yourPoints) {
    const result =  classPoints.reduce(function(accum, elem) {
       return accum += elem
     }, 0) / classPoints.length
     console.log(result)
      return result < yourPoints ? true : false
    }
   console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21))