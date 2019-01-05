function produceDrivingRange(range) {
	return function(begin, end) {
		const length = Math.abs(parseInt(end) - parseInt(begin))
		if (range >= length) {
			return `within range by ${range - length}`
		}else{
			return `${length - range} blocks out of range`
		}
	}
}
function produceTipCalculator(perCent) {
	return function(fare) {
		return fare * perCent
	}
}
function createDriver() {
	let DriverId = 0
	return class {
		constructor(name) {
			this.name = name
			this.id = ++DriverId
		}
	}
}
const Driver = createDriver()