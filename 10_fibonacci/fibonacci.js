const fibonacci = function(n) {  
  let lastNum = 1;
  let temp;
  let previousNum = 1; 
  if (n == 0){
    lastNum = 0;
  } else if (n == 1 || n == 2){
    return lastNum;
  } else if (n > 2) {
    for(let i = 3; i <= n; i++){
      temp = lastNum;
      lastNum = previousNum + lastNum;
      previousNum = temp;      
    }
  } else {
    lastNum = "OOPS";
  }  
  return lastNum;
};

// Do not edit below this line
module.exports = fibonacci;
