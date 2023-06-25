function alternateCase(s) {
    let arr = s.split("")
    return arr.map(function(item) {
      if(item === item.toUpperCase()) {
        return item.toLowerCase()
      } else if(item === item.toLowerCase()) {
        return item.toUpperCase()
      }
    }).join("")
  }
  console.log(alternateCase("Hello World"))