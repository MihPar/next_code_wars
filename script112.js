function removeExclamationMarks(s) {
    return s.split("").map(function(char) {
     return char !== "!" ? char : null
    }).join("")
  }
  console.log(removeExclamationMarks("Hello World!"))