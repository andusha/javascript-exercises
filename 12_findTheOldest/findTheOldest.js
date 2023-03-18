const findTheOldest = function(arr) {
    let resultObj = undefined
    let maxAge = 0
    for (let i = 0; i < arr.length; i++){
        if (!arr[i].yearOfDeath) arr[i].yearOfDeath = new Date().getFullYear()
        let age = arr[i].yearOfDeath - arr[i].yearOfBirth
        if (age > maxAge) {
            maxAge = age
            resultObj = arr[i]
        }
    }
    return resultObj
};

// Do not edit below this line
module.exports = findTheOldest;
