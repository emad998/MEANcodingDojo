function maxMinAvg(arr){
    var max = 0;
    var min = 0;
    var sum = 0;
    var avg = 0;
    var count = 0;
    var obj = {};
    for (var i=0; i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
        if (min > arr[i]){
            min = arr[i]
        }
        count += 1;
        sum += arr[i];
        avg = sum / count;

    }
    obj['max'] = max;
    obj['min'] = min;
    obj['avg'] = avg;
    return obj;
    

}

console.log(maxMinAvg([1, -2, 9, 4]));






