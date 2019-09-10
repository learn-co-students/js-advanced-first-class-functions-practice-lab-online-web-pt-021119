const logDriverNames = function(array){
  array.forEach(function(entry){
    console.log(entry.name);}
    );
  }

const logDriversByHometown = function(array, location){
  array.forEach(function(entry){
    if(entry.hometown===location){
      console.log(entry.name);}
    });
  }

const driversByRevenue = function(array){
  let newArray = [...array]
  newArray.sort(function(a,b){
    return a.revenue - b.revenue;
  });
  return newArray;
}

const driversByName = function(array){
  let newArray = [...array]
  newArray.sort(function(a,b){
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA<nameB){
      return -1;
    }
    if (nameA>nameB){
      return 1;
    }
    return 0;
  });
  return newArray;
}

const totalRevenue = function(array){
  let totalRevenue = 0;
  array.forEach(function(driver){
    totalRevenue += driver.revenue;
  });
  return totalRevenue;
}

const averageRevenue = function(array){
  return totalRevenue(array) / array.length;
}
