function cutTheRopes(a) {
    let arr = []
    while(a.length > 0) {
      arr.push(a.length)
      const min = Math.min(...a)
      a = a.map(function(item) {
        return item - min
      }).filter(function(char) {
        return char > 0
      })
    }
    return arr
  }
  console.log(cutTheRopes([3, 3, 2, 9, 7]))