function primeFactors(n) {
	let res = []
  for(let i = 2; i <= n; i++) {
    for(; n % i === 0; n /=i) {
      res.push(i)
    }
  }
  return res
}
console.log(primeFactors(20))