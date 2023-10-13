const gcd = (a, b) => b ? gcd(b, a % b) : a;

const reduce = ([a, b]) => {
  let d = gcd(a, b);
  return [a / d, b / d];
};

// function reduce(fraction){
// 	// This would be quicker if we were looping through primes.
// 	// Since to determine a prime would take an `additional` 2 calculations, 
// 	// it's more efficient to perform the 2 here on each number
// 	for (var i = fraction[0]; i > 0; i--) {
// 	  if (0 == fraction[0] % i && 0 == fraction[1] % i) {
// 		var numerator = (fraction[0] / i);
// 		var denominator = (fraction[1] / i)
// 		return [numerator, denominator];
// 	  }
// 	}
//   }