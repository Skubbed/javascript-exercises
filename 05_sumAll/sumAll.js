const sumAll = function(num1,num2) {
    let sum = 0, begin = 0, end = 0;;
    
    if(!(isValidSumNums(num1,num2))){
        return "ERROR";
    }
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }

    if(num2 > num1){
        begin = num1;
        end = num2;
    }
    else{
        begin = num2;
        end = num1;
    }

    while(begin<=end){
        sum+=begin;
        begin++;
    }

    return sum;
};

const isValidSumNums = function(num1, num2){
    if(num1%1 != 0 || num2%1 != 0){
        return false;
    }
    else if(typeof(num1) != "number" || typeof(num2)!='number'){
        return false;
    }
    
    return true;
    console.log((typeof(1) != "number"));
    console.log((typeof(1) != 'number'));
}

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(2.5, 4));