function isDivisible(n, ...args) {
    if (args.length === 0) {
     return true; // If there are no other arguments, return true
   }
 
   for (let i = 0; i < args.length; i++) {
     if (n % args[i] !== 0) {
       return false; // If n is not divisible by any of the other arguments, return false
     }
   }
 
   return true; // If n is divisible by all other arguments, return true
 
 }
 