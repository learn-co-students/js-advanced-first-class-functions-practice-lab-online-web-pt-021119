// Code your solution in this file!
const logDriverNames = function(arr){
  arr.forEach(function(el){
    console.log(el.name);
  });
};

const logDriversByHometown = function(arr, town){
  arr.forEach(function(el){
    if (el.hometown === town){
      console.log(el.name);
    };
  });
};

const driversByRevenue = function(arr){
  const newArr = [...arr];
  return newArr.sort(function(a,b){
    return a.revenue - b.revenue;
  });
};

const driversByName = function(arr){
  const newArr = [...arr];
  return newArr.sort(function(a,b){
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function(arr){
  return arr.reduce(function(total, currentDriver){
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function(arr){
  return totalRevenue(arr)/(arr.length);
};
