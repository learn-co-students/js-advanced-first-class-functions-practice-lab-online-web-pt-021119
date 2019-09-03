// Code your solution in this file!

function logDriverNames(drivers){
  return drivers.forEach(function(driver){
    console.log(driver.name)
  });
}

function logDriversByHometown(drivers, hometown){
  let filteredDrivers = drivers.filter(function(driver){
    return driver.hometown === hometown
  });
  return logDriverNames(filteredDrivers);
}

function driversByRevenue(drivers){
  const driversCopy = [...drivers];

  return driversCopy.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(drivers){
  const driversCopy = [...drivers]

  return driversCopy.sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  });
}

function totalRevenue(drivers){
  const reduceDriverRevenue = function(agg, driver, i, drivers){
    return agg + driver.revenue
  }
  return drivers.reduce(reduceDriverRevenue, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length;
}
