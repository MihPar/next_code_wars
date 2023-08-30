function rangeBitCount(a, b) {
    let arr = []
    for(let i = a; i <= b; i++) {
     arr.push(i)
    }  
    let newArr = arr.map(function(item) {
     return item.toString(2)
    })
    let num = newArr.map(function(item) {
     return item.split('1').reduce(function(accum, item) {
      return +accum + Number(item)
     })
    })
    num = num.reduce(function(accum, item) {
     return accum + item
    })
    return +num
   
    // let count = 0;
     
    //  for (let i = a; i <= b; i++) {
    //    const binary = i.toString(2); // Convert the number to binary representation
       
    //    count += binary.split('1').length - 1; // Count the number of 1s in the binary representation
    //  }
     
    //  return count;
   }
   // console.log(rangeBitCount(2,7))
   // console.log(rangeBitCount(4,4))
   console.log(rangeBitCount(0, 30))