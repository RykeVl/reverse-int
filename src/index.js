module.exports = function reverse (n) {
    let nStr = Math.abs(n).toString(),
        reverseStr = '';

    for (let i = nStr.length - 1; i >= 0; i--) {
        reverseStr += nStr[i];
    }

    return reverseStr;  
}
