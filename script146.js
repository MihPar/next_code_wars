function drawStairs(n) {
    let chairs = ""
    for(let i = 0; i < n; i++) {
     chairs += " ".repeat(i) + "I" + "\n"
    }
    let char = chairs.split('')
    char.pop()
    return char.join("")
  }
  console.log(drawStairs(5))