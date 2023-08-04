function stringy(size) {
    // let str = ""
    // for(let i = 0; i < size; i++) {
    //   str = str + (i % 2)
    // }
    // return str
    return "".padStart(size, "10")
  }
  console.log(stringy("hello"))