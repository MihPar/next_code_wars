function validatePIN (pin) {
  
    if (/^\d{4}$/g.test(pin) || /^\d{6}$/g.test(pin)) {
           return true 
    } else {
      return false
    }
  }
console.log(validatePIN("1234"))
console.log(validatePIN("1.234"))
console.log(validatePIN("a234"))
console.log(validatePIN("123456"))
console.log(validatePIN("1"))
console.log(validatePIN("12345"))