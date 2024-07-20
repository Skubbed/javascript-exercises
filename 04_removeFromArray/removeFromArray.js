const removeFromArray = function() {
    let len = arguments.length-1, index = 0;
    if(len < 0){
        return "ERROR";
    }
    while(len >= 1){
        for(; index <= arguments[0].length-1; index++){
            if(arguments[0][index] === arguments[len]){
                arguments[0].splice(index, 1);
                index--;
            }
        }
        index = 0;
        len--;
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;



