function differenceInAges(ages){
    let arr = ages.sort(function(a, b) {
      return b - a
    })
    let decimel = arr[0] - arr[arr.length - 1]
    let newArr = []
    newArr.push(arr[arr.length - 1], arr[0], decimel)
    return newArr
  }
  console.log(differenceInAges([82, 15, 6, 38, 35]))