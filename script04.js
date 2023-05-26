function outed(meet, boss){
	let result = Object.keys(meet)
	let count = result.reduce(function(sum, item) {
		if(item === boss) {
			sum += meet[item] * 2
		} else {
			sum += meet[item]
		}
		return sum
	}, 0) / Object.keys(meet).length
	if(count <= 5) {
		return "Get Out Now!"
	} else {
		return "Nice Work Champ!"
	}
}
console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'))           