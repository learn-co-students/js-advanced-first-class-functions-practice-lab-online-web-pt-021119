function logDriverNames(drivers){
	return drivers.forEach(function (driver) {console.log(driver.name)})
}

function logDriversByHometown(drivers, location){
	return logDriverNames(drivers.filter(function (driver){return driver.hometown === location}))
}

function driversByRevenue(drivers){
	const newArr = [...drivers]
	return newArr.sort(function(driverA, driverB){return driverA.revenue - driverB.revenue})
}

function driversByName(drivers){
	const newArr = [...drivers]
	return newArr.sort(function (driverA, driverB){return driverA.name.localeCompare(driverB.name)})
}

function totalRevenue(drivers){
	let revenues = []
	drivers.forEach(function (driver) {revenues.push(driver.revenue)})
	return revenues.reduce(function (totalRevenue, revenue){return revenue + totalRevenue})
}

function averageRevenue(drivers){
	return totalRevenue(drivers) / drivers.length;
}