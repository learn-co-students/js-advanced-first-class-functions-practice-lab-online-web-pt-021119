// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(function (el, i, arr) {
    console.log(el.name);
  });
}

function logDriversByHometown(arr, town) {
  arr.filter(function(driver) {
    return driver.hometown === town;
  }).forEach(function (el, i, arr) {
    console.log(el.name);
  });
}

function driversByRevenue(arr) {
  let newDrivers = arr.map(function(driver) {
    return driver;
  });

  newDrivers.sort(function(item1, item2) {
    return item1.revenue - item2.revenue;
  });

  return newDrivers;
}

function driversByName(arr) {
  let newDrivers = arr.map(function(driver) {
    return driver;
  });

  newDrivers.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });

  return newDrivers;
}

function totalRevenue(arr) {
  let total = arr.reduce(function(agg, el, i, arr) {
    return agg += el.revenue;
  }, 0);

  return total;
}

function averageRevenue(arr) {
  let total = arr.reduce(function(agg, el, i, arr) {
    return agg += el.revenue;
  }, 0);

  return total/arr.length;
}
