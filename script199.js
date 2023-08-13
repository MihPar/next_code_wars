function dropCap(n) {
    let arr = n.split(" ")
    return arr.map(function(item) {
      if(item.length <=2) {
        return item
      } else {
        return item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
      }
    }).join(" ")
  }
  // console.log(dropCap('more  than  of  one space between words'))
  console.log(dropCap('ALL CAPS CRAZINESS'))
  // console.log(dropCap('G doCR'))