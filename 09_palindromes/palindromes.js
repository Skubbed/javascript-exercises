const palindromes = function (str) {
    const alphanum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let begin = 0, end = str.length-1, cleanedStr = "";

    while(begin <= end){
        if(alphanum.includes(str[begin])){
            cleanedStr+=str[begin];
        }
        begin++;
    }
    cleanedStr = cleanedStr.toUpperCase();
    begin = 0;
    end = cleanedStr.length-1;
    while(begin < end){
        if(cleanedStr[begin] != cleanedStr[end]){
            return false;
        }
        begin++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes("racecar"));
console.log(palindromes("ra2ce2car"));
console.log(palindromes("rac2e2car"));
console.log(palindromes("race....car"));