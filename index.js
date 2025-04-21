// addition function
function add(a, b){
    let result = a+b;
    console.log(result)
}
// add(10, 20)

// subtraction function
function sub(x, y){
    let result = x - y;
    console.log(result);
}
//  sub(20,10)
// multipication finction

function mul(x, y){
    let result = x * y;
    console.log(result);
}
// mul(5, 3)

// division function
function div(x, y){
    let result = x / y;
    console.log(result);
}
// div(8,2)

// any array sum of array
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

// what is scop? scoping test perpas 

var a = 'abc'

function x(){
    function y(){
        var a 10;
        console.log(a)
    }
    console.log(a)
    y()
}

// inner function scop 
function test(n){
    function a(){
        return n % 3 === 0
    }
    function b(){
        return n % 5 === 0
    }

    if(a() && b()){
        console.log(n + 'is divisible by 3 and 5')
    }else{
        console.log('not valid number')
    }
}

test(5)

// swap 2 variables for sobuj vhai task
var a = 5
var b = 7

temp = a;
a = b;
b = temp;

console.log(a,b)

// any array number to conver the new array and 1st array number double, task from Jahid vhai

arr = [1, 2, 3, 4, 5]
function doubleOfArray(arr){
    let newArray = [];
    for(var i = 0; i < arr.length; i++){
        newArray.push(arr[i]*2)
    }
    console.log(newArray);
}
doubleOfArray(arr)