function consecutive(arr) {
	let count = 0
	let sort = arr.sort((a, b) => a - b)
	for(let i = 1; i < arr.length - 1; i++) {
	  count += Math.abs(arr[i] - arr[i - 1]) - 1;
   }
	return count 
   
  }
  // console.log(consecutive([4,8,6]))
  // console.log(consecutive([]))
  console.log(consecutive([1,2,3,4]))