function getFreeUrinals(urinals){
    if (urinals.includes('11')) {
       return -1;
     }
   
     let count = 0;
     let i = 0;
   
     while (i < urinals.length) {
       if (urinals[i] === '0') {
         // Check for available positions
         if (urinals[i + 1] !== '1' && urinals[i - 1] !== '1') {
           count++;
           i += 2;
         } else {
           i++;
         }
       } else {
         i++;
       }
     }
   
     return count;
   
   }
   console.log(getFreeUrinals("10000"))
   console.log(getFreeUrinals("01000"))
   console.log(getFreeUrinals("00000"))
   console.log(getFreeUrinals("011"))
   console.log(getFreeUrinals("0"))