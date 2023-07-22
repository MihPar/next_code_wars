function distinct(a) {
    // let arr = [...new Set(a)]
    // return arr
  
    return a.filter(function(item, index, array) {
      return array.indexOf(item) === index
    })
  }
  console.log(distinct([1,1,2,5,5]))