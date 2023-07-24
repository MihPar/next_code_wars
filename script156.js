function hello(name) {
    if(name === '' || name === undefined) {
      return "Hello, World!"
    } else {
      let r = name.slice(1)
      let res = r.toLowerCase()
      return `Hello, ${name[0].toUpperCase() + res}!`
    }
   }
   console.log(hello('alice'))
   console.log(hello(''))
   console.log(hello())