function logDriverNames(arr){
  arr.forEach(function (el, i, arr){
    console.log(el.name);
  });
}

function logDriversByHometown(arr, town){
  arr.forEach(function (el, i, arr){
    if(el.hometown === town){
      console.log(el.name);
    }
  });
}

function driversByRevenue(arr){
  const newArr = [...arr].sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return newArr;
}

function driversByName(arr){
  const newArr = [...arr].sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return newArr;
}

function totalRevenue(arr){
  return arr.reduce(function (agg, el, i, array) { return agg + el.revenue; }, 0);
}

function averageRevenue(arr){
  return (arr.reduce(function (agg, el, i, array) { return agg + el.revenue; }, 0) / arr.length);
}
