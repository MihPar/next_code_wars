function xor(a, b) {
    if (a === false && b === false) {
      return false
    } else if (a === true && b === true) {
      return false
    } else if(a === false && b === true) {
      return true 
    } else {
      return true
    }
  }
  console.log(xor(false, true))