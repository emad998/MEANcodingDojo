function bubbleSort(arr){
    var temp = 0;
    for (var i=0; i<arr.length; i++){
        for (var y=0; y<arr.length-1; y++){
            if(arr[y] > arr[i]){
                temp = arr[y];
                arr[y] = arr[i]
                arr[i] = temp
            }
        }
    }

    return arr
}

console.log(bubbleSort([4,3,2,7,8,1]))