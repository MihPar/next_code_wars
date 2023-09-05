function twoHighest(arr) {
	return arr
	   .filter((v, i, a) => a.indexOf(v) === i)  // Unique array
	   .sort((a, b) => b - a)  // Sort by DESC
	   .slice(0, 2);  // Get first 2 element of sorted array
   }

//    function twoHighest(arr) {
// 	if (arr.length === 0) {
// 		return []
// 	} else {
// 		for(let i = 0; i < arr.length; i++) {
// 			if(arr[i] === arr[i + 1]) {
// 				return [arr[i]]
// 			}
// 		}
// 	}
//   let num = 0
//   let min = 0
	
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > num) {
//       num = arr[i]
// 	}
//   }
//   for(let i = 0; i < arr.length; i++) {
// 		if(num > arr[i]) {
// 			min = arr[i]
// 		}
// 	}
// 	return [num, min]


// }
// console.log(twoHighest([4, 10, 10, 9] ))