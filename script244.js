function oddCount(n){
	let arr = []
	for(let i = 1; i < n; i +=2) {
	  arr.push(i)
	}
	// return arr.length
	let count = 0
	for(let i = 0; i < arr.length; i++) {
	  count++
	}
	return count
	// return Math.floor(n/2)
  }
  // console.log(oddCount(15))
  console.log(oddCount(15023))