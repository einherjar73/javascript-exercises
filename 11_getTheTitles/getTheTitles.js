const getTheTitles = function(books) {
  const newArr = books.map(book => {
    return book.title;
  })
  return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
