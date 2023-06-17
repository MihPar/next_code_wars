function arrayPlusArray(arr1, arr2) {
    let sum = 0
    arr1.concat(arr2).map(function(item) {
      sum += item
    })
    return sum
  }