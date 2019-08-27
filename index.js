// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver){
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function (drivers) {
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  })
}

const driversByName = function (drivers) {
  const sortedDrivers = [...drivers];
  return sortedDrivers.sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  })
}

const totalRevenue = function (drivers) {
  const findRevenue = function(agg, driver) {
    agg += driver.revenue;
    return agg;
  }
  return drivers.reduce(findRevenue, 0)
}

const averageRevenue = function (drivers) {
  const findAverage = function (agg, el, i) {
    agg += el.revenue;
    if (i === drivers.length-1){
      return agg/drivers.length;
    } else {
      return agg;
    }
  }
  return drivers.reduce(findAverage, 0);
}