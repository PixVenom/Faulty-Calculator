console.log("Welcome to faulty calculator")

function add(a,b){
    result=a+b;
    console.log(result)
}

function substract(a,b){
    result=a-b;
    console.log(result)
}

function multiply(a,b){
    result=a*b;
    console.log(result)
}

function divide(a,b){
    result=a/b;
    console.log(result)
}

function exponential(a,b){
    result=a**b;
    console.log(result)
}

let a=32
let b=44

if(Math.random>0.1){
    console.log("Additon is: ")
    add(a,b)
    console.log("Substraction is: ")
    substract(a,b)
    console.log("Multiplication is: ")
    multiply(a,b)
    console.log("Division is: ")
    divide(a,b)
}
else{
    console.log("Addition is two number is")
    substract(a,b);
    console.log("Multiplication is two number is")
    add(a,b);
    console.log("Subration is two number is")
    divide(a,b);
    console.log("division is two number is")
    exponential(a,b);
}