const reverseSeq = n => {
	if(n <= 0) {
		return [];
	  }
	
	  var resultArray = [];
	  for (var i = n; i >= 1; i--) {
		resultArray.push(i);
	  }
	
	  return resultArray;
	
  };