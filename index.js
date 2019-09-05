// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(element) {
    console.log(element.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach( function(element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
};

const driversByRevenue = function (drivers) {
  return [...drivers].sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {
  return [...drivers].sort(function (a, b) {
    if (a.name < b.name) {
   return -1;
 }
 if (a.name > b.name) {
   return 1;
 }

 // names must be equal
 return 0;
  });
};


const totalRevenue = function (drivers) {
  return drivers.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0);
};


const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
