function toDayOfYear(arr) {
    const dateOne = new Date(`${arr[2]}-12-31`)
    const dateTwo = new Date(`${arr[2]}-${arr[1]}-${arr[0]}`)
    const date = (( dateOne - dateTwo) / 1000) / (60 * 60 * 24)
    
    if ((dateOne.getFullYear() % 4 === 0) && (dateOne.getFullYear() % 100 !== 0) || (dateOne.getFullYear() % 400 === 0)) {
        return 366 - date
    } else {
        return 365 - date
    }
}
console.log(toDayOfYear([25, 12, 2017]))





