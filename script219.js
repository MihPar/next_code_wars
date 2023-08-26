function calculator(a,b,sign){
    // if (typeof a === 'number' && typeof(b) === 'number') {
    //   if(sign ===  '+') {
    //     return a + b
    //   } else if (sign === '-') {
    //     return a - b
    //   } else if (sign === '*') {
    //     return a * b
    //   } else if(sign === '/') {
    //     return a / b
    //   } else {
    //     return "unknown value"
    //   }
    // } else  {
    //     return "unknown value"
    //   }
  
    if(typeof(a) === 'number' && typeof b === 'number') {
        switch(sign) {
        case '-':
          return a - b
          break
        case '+':
          return a + b
          break
        case '*':
          return a * b
          break
        case '/':
          return a / b
          break
        default: 
          return "unknown value"
      }
    } else {
      return "unknown value"
    }
    
  }
  console.log(calculator(3,5,"*"))
  // console.log(calculator(3, "h","*"))
  // console.log(calculator(3, 7,"&"))
  