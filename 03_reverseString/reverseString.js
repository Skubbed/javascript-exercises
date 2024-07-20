const reverseString = function(string) {
    let revString="", index = string.length-1;

    while(index >= 0){        
        revString += string[index];
        
        console.log(revString);
        index--;
    }

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
