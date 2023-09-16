function sumOfIntegersInString(s) {
	// return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);

	return s.split(/[^0-9]/g).map(item => parseInt(item)).filter(Boolean).reduce((accum, item) => accum + item, 0)
  }