function explode(s) {
    let arr = s.split("")
    return arr.map(function(item) {
      return item.repeat(Number(item))
    }).join("")
  }
  explode("325")