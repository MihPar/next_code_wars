function addLength(str) {
    let arr = str.split(" ")
    return arr.map(function(item) {
      return item + " " + item.length
    })
  }
  addLength('apple ban')