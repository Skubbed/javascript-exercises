const leapYears = function(year) {
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true;
            }
            else{
                return false;
            }
        }
        return true;
    }
    return false;
};
// Leap years are years divisible by four, NOT divisible by 100 UNLESS divisible by 400

// Do not edit below this line
module.exports = leapYears;
