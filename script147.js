var capitals = function (word) {
    let arr = word.split("")
    let newArr = []
    arr.map(function(item, index) {
      if(item === item.toUpperCase()) {
        newArr.push(index)
      }
    })
    return newArr
  };
  console.log(capitals('CodEWaRs'))