function findArray(arr1, arr2){
    let array = []
    let newArray = []
    for(let i = 0; i < arr2.length; i++) {
     array.push(arr1[arr2[i]]) 
     if(arr1.length === 0) {
      return newArray
     }
    }
    return array
   }
   console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]))
   console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]))
   console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], []))
   console.log(findArray([], [0, 1]))