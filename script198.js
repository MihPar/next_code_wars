function arr2bin(arr){
    return arr.reduce(function(accum, item) {
      if(typeof(item) === 'number') {
        return accum + item
      } else if(typeof(item) !== "number") {
        item = 0
        return accum + item
      }
      
    }, 0).toString(2)
  }
  // console.log(arr2bin([1,2]))
  console.log(arr2bin([true,true,false,15]))