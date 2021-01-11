function coinChange(n){
    var dollarCount = 0;
    var dimesCount = 0;
    var penniesCount = 0;
    var obj = {};
    var i = 0;
    while(i<n){
        i++;
        if (i % 100 == 0){
            dollarCount += 1;
            dimesCount = 0;
            penniesCount = 0;
        } else if (i % 10 == 0){
            dimesCount += 1;
            penniesCount = 0;
        } else if (i % 1 == 0) {
            penniesCount += 1;
        }
    }

    obj['dollars'] = dollarCount;
    obj['dimes'] = dimesCount;
    obj['pennies'] = penniesCount;
    return obj;
}

console.log(coinChange(312))


// function coinChange(n) {
//     var dollarCount = 0;
//     var dimesCount = 0;
//     var penniesCount = 0;
//     while (n > 0){
//         if (n>=100){
//             dollarCount++;
//             n -= 100;
//         } else if (n > 10){
//             dimesCount++;
//             n -= 10;
//         } else {
//             penniesCount = n;
//             n = 0;
//         }
//     }
//     return ([dollarCount, dimesCount, penniesCount])
// }

// console.log(coinChange(312))