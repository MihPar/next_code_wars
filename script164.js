function multiply(number){
    let arr = number.toString().split("")
    if(number > 0) {
      let res = Math.pow(5, arr.length)
      let r = number * res
      return r
    } else if(number < 0) {
      let res = Math.pow(5, arr.length - 1)
      let r = number * res
      return r
    } else {
      return 0
    }
    
  }
  // console.log(multiply(200))
  console.log(multiply(-10))