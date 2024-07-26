  const getTheTitles = function() {
    let bookList = [];
    for(let i = 0; i < arguments[0].length; i++){
        bookList[i] = arguments[0][i].title;
    }
    return bookList;
};

// Do not edit below this line
module.exports = getTheTitles;

