arr = [1, 2, 3, 4, 5]
function doubleOfArray(arr){
    let newArray = [];
    for(var i = 0; i < arr.length; i++){
        newArray.push(arr[i]*2)
    }
    console.log(newArray);
}
doubleOfArray(arr)

