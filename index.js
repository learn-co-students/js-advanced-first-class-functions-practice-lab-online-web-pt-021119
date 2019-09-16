
const logDriverNames = function (list) {
  list.forEach(function(el) {
    console.log(el.name);
  });
};

const logDriversByHometown = function(list, town) {
  list.forEach(function(el) {
    if (el.hometown === town) {
      console.log(el.name);
    };
  });
};

const driversByRevenue = function (list) {
  const List = [...list];
  return List.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function (list) {
 const  newList = [...list];
  return newList.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function (list) {
  return list.reduce( function (total, driver) {
    return total + driver.revenue;
  }, 0);
};


const averageRevenue = function (list) {
  return totalRevenue(list)/list.length;
};

