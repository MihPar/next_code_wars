function maxDiff(list) {
    // if(list.length === 0 || list.length === 1) {
    //   return 0
    // } else {
    //   return Math.max(...list) - Math.min(...list)
    // }
  
    return (list.length === 0 || list.length === 1) ? 0 : Math.max(...list) - Math.min(...list)
  
    // let num = 0
    // let arr = []
    // for(let i = 0; i < list.length; i++) {
    //   if(list[i] > num) [
    //     num = list[i]
    //   ]
    // }
    // arr.push(num)
  
    // let numMin = 0
    // for(let i = 0; i < list.length; i++) {
    //   if(list[i] < numMin) [
    //     numMin = list[i]
    //   ]
    // }
    // arr.push(numMin)
    // return arr
    
  };
  console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]))