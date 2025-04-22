const removeFromArray = function(arr, ...theArgs) {
  let newArr = [];  
  arr.forEach(element => {
    let noPush = false;
    for(let i = 0; i < theArgs.length; i++){
      if(element === theArgs[i]){
        noPush = true;
      }
    }
    if (!noPush) {
      newArr.push(element);
    }
  });
  return newArr;
};

 console.log(removeFromArray([1, 2, 3, 4,5,3,5,6,7,5,3], 7, 2));
// Do not edit below this line
module.exports = removeFromArray;
