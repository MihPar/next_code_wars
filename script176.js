function removeEveryOther(arr){
    return arr.filter(function(item, index) {
      return index % 2 === 0
     
    })
   }
   console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))