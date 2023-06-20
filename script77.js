function fakeBin(x){
    let result = []
    let arr = x.split("")
   for(let i = 0; i < arr.length; i++) {
     if(Number(arr[i]) >= 5) {
       result.push("1")
     } else if(Number(arr[i]) < 5) {
       result.push("0")
     }
   }
    return result.join("")
  }
  console.log(fakeBin('45385593107843568'))