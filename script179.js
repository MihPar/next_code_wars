function addedChar(s1, s2){
    let arrOne = s1.split("").sort()
    let arrTwo = s2.split("").sort()
  
    for(let i = 0; i < arrTwo.length; i++) {
      if(arrOne[i] !== arrTwo[i]) {
        return arrTwo[i]
      }
    }
    
  }
  // let s1 = "hello";
  // let s2 = "?he?l?lo";
  
  let s1 = "aaabbbccc";
  let s2 = "aaacccbbbccc";
  
  
  console.log(addedChar(s1, s2))