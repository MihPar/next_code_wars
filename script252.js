function isPeriodLate(last, today, cycleLength) {
	const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
	const differenceInDays = Math.round((today - last) / oneDay);
  
	return differenceInDays > cycleLength;
  }
  