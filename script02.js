function age(x, y){
	let what
	if(x > 0) {
		what = (x / (y - 1)) + 6
	} else if(x < 0) {
		what = (Math.abs(x) / (1 - y)) - 15
	}
	return what
}
console.log(age(-15, 0.25))
console.log(age(6, 3))