function eliminateUnsetBits(number) {
    let arr = number.split("")
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
     if(arr[i] !== "0") {
       newArr.push(arr[i])
     }
     }
    let result = parseInt(newArr.join(""))
    if(isNaN(result)) {
     return 0
    } else {
      return parseInt(newArr.join(""), 2)
    }
    
   }
   console.log(eliminateUnsetBits("11010101010101"))
   console.log(eliminateUnsetBits("0000"))
   console.log(eliminateUnsetBits("1010101011011100101101110101"))