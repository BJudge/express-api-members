const sum = function(num1, num2) {
    return num1 + num2
}

class humanBeing {
    constructor() {
        console.log("I'm alive");
    }
}

module.exports.sum = sum;
module.exports.humanBeing = humanBeing;