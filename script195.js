function whoTookTheCarKey(message) {
    let str = ""
    for(let i = 0; i < message.length; i++) {
     str += String.fromCharCode(parseInt(message[i], 2))
    }
    return str
   }
   console.log(whoTookTheCarKey(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']))