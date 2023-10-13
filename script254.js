function factors(integer, limit){
	var result = [];
  
	for(var i = limit; i <= integer; i++) {
	  if(integer % i == 0) {
		result.push(i);
	  }
	}
	return result;
  }