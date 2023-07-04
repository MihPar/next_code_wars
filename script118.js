function largest(n, array) {
    let arr = array.sort(function(a, b) {
      return b - a
    })
    arr.length = n
    return arr.reverse()
    // for(let i = 0; i < arr.length; i++) {
    //   if(arr[i] === arr[i + 1]) {
    //     continue
    //   } else {
    //     newArr.push(arr[i])
    //       if(newArr.length === n) break
    //   }
    // }
    // return newArr
  }
  console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]))