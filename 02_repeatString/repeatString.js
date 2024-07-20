const repeatString = function(string, count) {
    if(count < 0){
        return("ERROR");
    }
    let returnString = "";
    
    while(count > 0){
        returnString += string;
        count--;
    }

    return returnString;    
};

// Do not edit below this line
module.exports = repeatString;
