function sortByArea(array) {
    // let arr = []
    // for(let i = 0; i < array.length; i++) {
    //  if (Array.isArray(array[i])) {
    //    let mul = array[i][0] * array[i][1]
    //   arr.push(mul)
    //  } else
    //   if(typeof array[i] === "number") {
    //   arr.push((array[i] * 3,14) ** 2)
    //  }
    // }
    // return arr.sort(function(a, b) {
    //  return a - b 
    // })
   
    return [...array].sort(function(a, b) {
     return (typeof a === "number" ? Math.PI * a ** 2 : a[0] * a[1]) - (typeof b === "number" ? Math.PI * b ** 2 : b[0] * b[1])
    })
   }
   console.log(sortByArea([ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]))