//return price without vat
function excludingVatPrice(price){
	if(price === null) {
	  return -1
	} 
	  const VAT = +(price / 1.15).toFixed(2)
	  return VAT
   
  }