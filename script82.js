function isIsogram(str){
    // let newStr = str.toLowerCase().split("").sort()

    // for(let i = 0; i < newStr.length; i++) {
    //   if(newStr[i] === newStr[i + 1]) {
    //     return false
    //   } else {
    //     return true
    //   }
    // }
  
  
  
    let result = new Set(str.toLowerCase().split(""))
    if([...result].length === str.length) {
      return true
    } else {
      return false
    }
  
  
    
    // for(let i = 0; i < newStr.length; i++) {
    //   if (str.indexOf(newStr[i]) === str.lastIndexOf(newStr[i])) {
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  }
  console.log(isIsogram("Dermatoglyphics"))
  console.log(isIsogram("aba"))
  console.log(isIsogram("isIsogram"))