function removeConsecutiveDuplicates(string) {
	let newArr = []
	let arr = string.split(' ')
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] !== arr[i + 1]) {
			newArr.push(arr[i])
		}
	}
	return newArr
}
console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))