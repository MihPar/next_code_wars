const sumSquareEvenRootOdd = ns => {
    let newArr = []
    ns.forEach(function(item) {
      if(item % 2 === 0) {
        item *=item
         newArr.push(item)
      } else if(item % 2 === 1) {
         newArr.push(Math.sqrt(item))
      }
    })
    let result = newArr.reduce(function(accumulator, item) {
      return accumulator += item
    }, 0)
    return Number(result.toFixed(2))
  };
  console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))