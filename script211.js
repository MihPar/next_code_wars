function doubleChar(str) {
    let arr = str.split("")
    return arr.map(function(item) {
      return item + item
    }).join("")
   }
   