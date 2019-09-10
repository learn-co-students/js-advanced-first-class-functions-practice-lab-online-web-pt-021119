const logDriverNames = function(drivers) {
  const callback = function (driver, i, drivers) {
    console.log(`${driver.name}`);
  };
  drivers.forEach(callback);
};

const logDriversByHometown = function(drivers, hometown) {
  const callback = function (driver, i, drivers) {
    if (driver.hometown == hometown) {
      console.log(driver.name);
    }
  }
  drivers.forEach(callback);
};

const driversByRevenue = function(drivers) {
  const drivers_copy = [...drivers];
  const callback = function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };
  return drivers_copy.sort(callback);
};

const driversByName = function(drivers) {
  const drivers_copy = [...drivers];
  const callback = function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  };
  return drivers_copy.sort(callback);
};

const totalRevenue = function(drivers) {
  const callback = function(total, driver, i, drivers) {
    return total + driver.revenue;
  };
  return drivers.reduce(callback, 0);
}

const averageRevenue = function(drivers) {
  const total_revenue = totalRevenue(drivers);
  const amount_of_drivers = Object.keys(drivers).length
  return total_revenue / amount_of_drivers;
}
