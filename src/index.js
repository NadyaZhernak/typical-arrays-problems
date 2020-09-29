
exports.min = function min (array) {
    if (array === undefined) {
        return 0;
    }
    let min = 0;
    for (let i = 0; i < array.length; i++) {
        min = ( array[i] < min ) ? array[i] : min;
    }
    return min;
}

exports.max = function max (array) { 
    if (array === undefined) {
        return 0;
    }
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        max = ( array[i] > max ) ? array[i] : max;
    }
    return max;  
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let average =  0; 
        for (let i = 0; i < array.length; i++) {
            average += array[i]; 
        }
        return average / array.length;
    }
}
