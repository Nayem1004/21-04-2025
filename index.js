// addition function
function add(a, b){
    let sum = a+b;
    return sum;
}
 addition = add(10, 20)
console.log(addition);
 document.getElementById("sum").innerHTML = addition;

// subtraction function
function sub(x, y){
    let result = x - y;
    return result;
}
subtraction = sub(20, 10)
document.getElementById("sub").innerHTML = subtraction;

// multipication finction

function mul(x, y){
    let result = x * y;
    return result;
}
 multipication = mul(5,3)
 document.getElementById("mul").innerHTML = multipication

// division function
function div(x, y){
    let result = x / y;
    return result;
}
// div(8,2)
division = div(8,2);
document.getElementById("div").innerHTML = division;

// any array sum of array
arr1 = [1, 2, 3, 4, 5, 6]
function sumOfArray(arr){
    let sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
    
}
sumOfArray(arr1)
fullSum = sumOfArray(arr1)
document.getElementById("arraySum").innerHTML = fullSum


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

// document.getElementById("email").innerHTML = informetion

// what is scop? scoping test perpas 

var a = 'abc'

function x(){
    function y(){
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
        masseg = n + ' is divisible by 3 and 5'
    }else{
        masseg = 'not valid number'
    }
}


 test(15);
 document.getElementById("array").innerHTML = masseg

// swap 2 variables for sobuj vhai task
var a = 5
var b = 7

temp = a;
a = b;
b = temp;
console.log(a, b)

// any array number to conver the new array and 1st array number double, task from Jahid vhai

arr = [1, 2, 3, 4, 5]
function doubleOfArray(arr){
    let newArray = [];
    for(var i = 0; i < arr.length; i++){
        newArray.push(arr[i]*2)
    }
    return newArray;
}
doubleOfArray(arr)
result = doubleOfArray(arr);

document.getElementById("input").innerHTML = result

