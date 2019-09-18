function logDriverNames(drivers) {
    drivers.forEach(function (driver) {console.log(driver.name)});
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(function (driver) {if(
    driver.hometown === location){
        console.log(driver.name)};
    });
}

function driversByRevenue(drivers) {
    return drivers.sort(function (a, b) {return a.revenue - b.revenue});
}