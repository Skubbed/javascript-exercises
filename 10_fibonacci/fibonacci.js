const fibonacci = function(num) {
    let count = Number(num);
    
    if(count < 0){return "OOPS"}
    if(count === 0){return 0;}
    
    let a = 1, b = 1, currentNum= 1;
    
    //start at 3 as the first 2 fibonacci nums are 1, which current Numstarts as
    while(count >= 3){
        currentNum= a + b;
        a = b;
        b =currentNum;
        count--;
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
