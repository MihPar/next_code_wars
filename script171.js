function add(a, b){
	if(typeof a === 'string' && typeof b === 'number') {
    if(+a === b)  {
      return true
    } else {
      return false
    }
  } else if(typeof a === 'number' && typeof b === "string") {
    if(a === +b) {
      return true
    } else {
      return false
    }
  } else if(typeof a === "number" && typeof(b) === 'number') {
    if(a === b) {
      return true
    } else {
      return false
    }
  } else if(typeof a === 'string' && typeof b === 'string') {
    if(+a === +b) {
      return true
    } else {
      return false
    }
  }
}