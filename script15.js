function numberToPower(number, power){
    if (power === 1) {
        return number
    } else {
        let num = 1
        for(let i = 1; i <= power; i++) {
            num *= number
        }
            return num
        }
}
console.log(numberToPower(4, 2))
console.log(numberToPower(10, 4))
console.log((numberToPower(10, 0), 1))
