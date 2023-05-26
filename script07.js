
function wallpaper(l, w, h) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
        
        let resOne = l * h
        
        let resTwo = w * h
        
        if(l <= 0 || w <= 0 || h <=0) {
            return numbers[0]
        } else {
            let res = (resOne + resTwo)
            let count = (res + (res * 0.15))  * 2
        
            let rul = 0.52 * 10
        
            let myResult = count / rul
        
            return numbers.find(function(item, index) {
                return item ? index === Math.ceil(myResult) : null
            })
        }
    }
    console.log(wallpaper(6.3, 4.5, 3.29))
    console.log(wallpaper(0, 5.6, 3.20))