function whoIsPaying(name){
    if(name.length <= 2) {
      let newArr = []
      return name.split(" ")
    } else if(name.length > 2) {
      let newArr = []
      newArr.push(name)
      let len = name.slice(0, 2)
      newArr.push(len)
      return newArr
    }
  }
  console.log(whoIsPaying("I"))
  console.log(whoIsPaying(""))
  console.log(whoIsPaying("Me"))
  console.log(whoIsPaying("Melania"))
  
  