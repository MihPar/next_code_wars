function switcheroo(x){
    let arr = x.split("")
    return arr.map(function(item) {
      return item === "a" ? item = "b" : item === "b" ? item = "a" : item
    }).join("")
  }
  console.log(switcheroo('aaabcccbaaa'))