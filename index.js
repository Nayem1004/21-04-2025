function add(a, b){
    let result = a+b;
    console.log(result)
}
// add(10, 20)

function sub(x, y){
    let result = x - y;
    console.log(result);
}
//  sub(20,10)

arr = [1, 2, 3, 4, 5]
function sumOfArray(arr){
    let sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}

// sumOfArray(arr)

function names(){
    for (var i = 0; i < arguments.length; i++)
        console.log(arguments[i])
}
// names("nayemshake")

function person(name, email){
    return{
        name: name,
        email: email
    }
}
var p = person('Nayem', 'nayem@procoder.org')
console.log(p)

// swap 2 variables for sobuj vhai task
var a = 5
var b = 7

temp = a;
a = b;
b = temp;

console.log(a,b)