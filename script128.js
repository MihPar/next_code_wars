function digitalRoot(n) {
    let str = n.toString()
    let arr = str.split("")
    let newArr = arr.map(function(item) {
      return Number(item)
    })
    
    let result = newArr.reduce(function(accum, item) {
        return accum + item
      }, 0)
    if(result >= 10) {
      return digitalRoot(result)
    } else {
      return result
    }
  }
  console.log(digitalRoot(456))
  
  
  // function digitalRoot(n) {
  //   let digits = n.toString().split('');
  
  //   let sum = digits.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
    
  //   if (sum >= 10) {
  //     return digitalRoot(sum);
  //   }
    
  //   return sum;
  // }
  
  // console.log(digitalRoot(16));      // Output: 7
  // console.log(digitalRoot(942));     // Output: 6
  // console.log(digitalRoot(132189));  // Output: 6
  // console.log(digitalRoot(493193));  // Output: 2
  