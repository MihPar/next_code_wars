function toBytes(n) {
	let bytes = [];
	
	// Convert n to binary representation
	let binary = n.toString(2);
	  // return binary
	
	// Pad binary representation with leading zeroes
	let padding = 8 - (binary.length % 8);
	if (padding !== 8) {
	  binary = '0'.repeat(padding) + binary;
	}
  
	// Split binary representation into 8-bit chunks and add them to the bytes list
	for (let i = 0; i < binary.length; i += 8) {
	  let byte = binary.substring(i, i + 8);
	  bytes.push(byte);
	}
  
	return bytes;
  }
  console.log(toBytes(1024)); // Expected output: ['00000000', '01000000']
  
  