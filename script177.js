/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){

    const max = Math.max(a,b,c);
    
    if (a+b+c <= 2*max) return 0;
    if (2*max*max == a*a+b*b+c*c) return 2;
    if (2*max*max >  a*a+b*b+c*c) return 3;
    return 1;
  
  // let a1, a2, a3, cosA, cosB, cosC;
  //         cosA = (b*b + c*c - a*a) / (2*b*c);
  //         cosB = (a*a + c*c - b*b) / (2*a*c);
  //         cosC = (a*a + b*b - c*c) / (2*a*b);
      
  //         angleA = Math.acos(cosA) * 180 / Math.PI;
  //         angleB = Math.acos(cosB) * 180 / Math.PI;
  //         angleC = Math.acos(cosC) * 180 / Math.PI;
      
  //      let newArr = [Math.round(angleA), Math.round(angleB), Math.round(angleC)];
  //  if(newArr[0] < 90 && newArr[1] < 90 && newArr[2] < 90) {
  //   return 1
  //  }  else if(newArr[0] === 90 || newArr[1] === 90 || newArr[2] === 90) {
  //   return 2
  //  } else if (newArr[0] > 90 || newArr[1] > 90 || newArr[2] > 90) {
  //   return 3
  //  }else {
  //   return 0
  //  }
    
  //   let [a, b, c] = arr
  //  let cosA = ((b ** 2) + (c ** 2) - (a ** 2)) / (2 * b * c) 
  //  let cosB = ((a ** 2) + (c ** 2) - (b ** 2)) / (2 * a * c) 
  //  let cosC = ((a ** 2) + (b ** 2) - (c ** 2)) / (2 * b * a) 
  
  //  let a1 = (b ** 2) + (c ** 2) - ((2 * b * c) * Math.cos(cosA))
  //  let b1 = (a ** 2) + (c ** 2) - ((2 * a * c) * Math.cos(cosB))
  //  let c1 = (a ** 2) + (b ** 2) - ((2 * a * b) * Math.cos(cosC))
  //  // return [Math.round(a1), Math.round(b1), Math.round(c1)]
  
  //  // let a1, a2, a3, cosA, cosB, cosC;
  //  //        cosA = (b*b + c*c - a*a) / (2*b*c);
  //  //        cosB = (a*a + c*c - b*b) / (2*a*c);
  //  //        cosC = (a*a + b*b - c*c) / (2*a*b);
      
  //  //        angleA = Math.acos(cosA) * 180 / Math.PI;
  //  //        angleB = Math.acos(cosB) * 180 / Math.PI;
  //  //        angleC = Math.acos(cosC) * 180 / Math.PI;
      
  //      // let newArr = [Math.round(angleA), Math.round(angleB), Math.round(angleC)];
  //      let newArr = [Math.round(a1), Math.round(b1), Math.round(c1)];
  //  if(newArr[0] < 90 && newArr[1] < 90 && newArr[2] < 90) {
  //   return 1
  //  }  else if(newArr[0] === 90 || newArr[1] === 90 || newArr[2] === 90) {
  //   return 2
  //  } else if (newArr[0] > 90 || newArr[1] > 90 || newArr[2] > 90) {
  //   return 3
  //  }else {
  //   return 0
  //  }
    
  }