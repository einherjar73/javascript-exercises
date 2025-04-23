const palindromes = function (str) {  
  const letters = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let chars = str.toLowerCase().split('');
  chars = chars.filter(char => {
    return letters.includes(char) ? true : false;    
  });
  let textReverse = chars.slice().reverse().toString();
  let text = chars.toString();
  
  return text === textReverse;
};

// Do not edit below this line
module.exports = palindromes;
