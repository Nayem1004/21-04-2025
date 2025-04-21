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


 test(15);
 console.log(test())