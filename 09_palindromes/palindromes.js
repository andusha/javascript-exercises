const palindromes = function (str) {
    str = str.replace(/[^\w]|_/g, "").toLowerCase()
    let strReverse = str.toLowerCase().split('').reverse().join('')
    if (strReverse === str) return true
    else return false
};

// Do not edit below this line
module.exports = palindromes;
