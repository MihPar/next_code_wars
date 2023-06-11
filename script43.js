function sortArray(a1, a2) {
    let word = []
        let arr = a1.map(function(item) {
            for(let i = 0; i < a2.length; i++) {
                if(a2[i].startsWith(item.slice(0, 1))) {
                    word.push(a2[i])
                }
            }
        })
    return word
}
var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
console.log(sortArray(a1, a2))

// ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
