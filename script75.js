function friend(friends){
    let arr = []
    friends.map(function(item) {
      if(item.length === 4) {
        arr.push(item)
      }
    })
    return arr
  }
  console.log(friend(["Ryan", "Kieran", "Mark"]))