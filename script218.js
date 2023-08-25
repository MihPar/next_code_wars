function mergeArrays(arr1, arr2) {
    let newArr = [...arr1, ...arr2]
    
    let set = new Set(newArr)
    let r = [...set]
    return r.sort((a, b) => {
      return a - b
    })
  }
  // console.log(mergeArrays([1,2,3,4], [5,6,7,8]))
  console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))