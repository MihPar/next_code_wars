function arrayMadness(a, b) {
    // let arr = []
     let reducOne = a.reduce(function(accum, item) {
      return accum + (item ** 2)
    }, 0)
    // arr.push(reducOne)
  
    let reducTwo = b.reduce(function(accum, item) {
      return accum + (item ** 3)
    }, 0)
    // arr.push(reducTwo)
    // return arr
    return (reducOne > reducTwo) ? true : false
  }
  
  // console.log(arrayMadness([5,6,7],[4,5,6]))
  console.log(arrayMadness([4,5,6],[1,2,3]))