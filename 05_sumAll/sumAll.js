const sumAll = function(first, second) {  
  if (first < 0 || second < 0){ 
    return "ERROR";
  }  

  if(!Number.isInteger(first) || !Number.isInteger(second)){
    return "ERROR";
  }

  let highest = 0;
  let lowest = 0;
  let sum = 0;
  if (first > second){
    highest = first;
    lowest = second;
  } else {
    highest = second;
    lowest = first;
  }

  for(let i = lowest; i <= highest; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
