const fibonacci = function(num) {
    if (num < 0) return 'OOPS'
    let f0 = 0
    let f1 = 1
    let fn = 1
    for (let i = 1; i < num; i++){
        fn = f0 + f1
        f0 = f1
        f1 = fn
    }
    return fn
};

// Do not edit below this line
module.exports = fibonacci;
