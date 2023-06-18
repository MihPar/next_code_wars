const object = {
    "A": ". .",
    "B": ". ..",
    "C": ". ...",
    "K": ". ...",
    "D": ". ....",
    "E": ". .....",
    "F": ".. .",
    "G": ".. ..",
    "H": ".. ...",
    "I": ".. ....",
    "J": ".. .....",
    "L": "... .",
    "M": "... ..",
    "N": "... ...",
    "O": "... ....",
    "P": "... .....",
    "Q": ".... .",
    "R": ".... ..",
    "S": ".... ...",
    "T": ".... ....",
    "U": ".... .....",
    "V": "..... .",
    "W": "..... ..",
    "X": "..... ...",
    "Y": "..... ....",
    "Z": "..... ....."
  }
  
  function tapCodeTranslation(text) {
    const arr = text.toUpperCase().split("")
    let result = arr.map(function(item) {
       return object[item]
    })
    return result.join(" ")
  }
  
  
  
  
  
  console.log(tapCodeTranslation("total"))
  console.log(tapCodeTranslation("something"))
  console.log(tapCodeTranslation("test"))
  console.log(tapCodeTranslation("e"))