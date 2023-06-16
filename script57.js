function xor(a, b) {
    //   if(a === true && b === true) {
    //     return true
    //   } else if (a === true && b === false) {
    //     return false 
    //   } else if (a === false && b === true) {
    //     return false
    //   } else if(a === false && b === false) { 
    //     return false
    //   } else if (a === true || b === true) {
    //     return true
    //   } else if(a === true || b === false) {
    //     return true
    //   } else if(a === false || b === true) {
    //     return true
    //   } else if (a == false || b === false){
    //     return  false
    //   }
      if(a === b) {
        return  false
      } else if (a === true || b === true) {
        return true
      } else {
        return false
      }
     }
     console.log(xor(true, false))