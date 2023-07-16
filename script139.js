function  calculateAge(year1, year2) {
    if(year1 < year2) {
      let year = year2 - year1
      if(year === 1) {
        return `You are ${year} year old.`
      }
     return `You are ${year} years old.`
    } else if(year1 > year2) {
      let year = year1 - year2
      if(year === 1) {
        return `You will be born in ${year} year.`
      }
      return `You will be born in ${year} years.`
    } else if(year1 === year2) {
      return `You were born this very year!`
    }
      
    }
    
    