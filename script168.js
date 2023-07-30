function lowercaseCount(str){
    // if(str.length === 0) {
    //     return 0
    // } else if (str.match(/[a-z]/g) == null) {
    //     return 0
    // } else {
    //     return str.match(/[a-z]/g).length
    // }


    return str.split("").reduce(function(accum, item) {
        return accum += ("abcdefghijklmnopqrstuvwxyz".includes(item)) ? 1 : 0
    }, 0)
    
}
console.log(lowercaseCount("abcwABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
// console.log(lowercaseCount(""))
// console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))