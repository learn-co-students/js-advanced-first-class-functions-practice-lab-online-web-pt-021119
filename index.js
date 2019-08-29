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
