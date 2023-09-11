function hammingWeight(x){
	return x ? x%2+hammingWeight(x>>1) : x
  }//z.


  function hammingWeight(x) {
	let i = 0
	while (x > 0) {
	  i += x & 1
	  x >>= 1
	}
	return i
  }