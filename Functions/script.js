
// a(); works fine coz hoisted as function
// b(); throws an error because b here is a variable and is undefinded at the moment and we cannot call a varible as function


// Functions Statement
function a(){
    console.log('a called');
}
a();
// Decalration of a function is know as Function Statement >> particularly the first line.



// Function Expression ? First an expression is something that has an operator and operand
var b = function (){
    console.log('b called');
}
b();
// or var b = function xyz() {...}  is Named Function Expression

/************** DIFFERENCE BW STATEMENT AND EXPRESSION  ****************
 
Hoisting : In the functions statement example function is hoisted as it is and we can even call
            it before its initilazation. 
            But in case of Function Expression it is treated as a variable and hoisted wtih
            undefined and cannot be called above the body.

*/


// Anonymous FUNCTION : used where functions are needed as values and they have no identity
/* 
function (){
    // This is a syntax error because a function statement must have name.
    
    // They must be used with expressions or functions as we use values :
        // 1. inside the functions call : xyz(functins (){...})
        // 2. while returning a function : return function(){...}
        // 3. Mostly used with Arrow Functions
}
*/

const body = document.getElementById('root');

body.addEventListener('click',()=>{
    console.log('Clicked from arrow functions !!!!');
})




// FIRST CLASS FUNCTION : the ability of a functions to be used as vlaue
   // i.e : xyz(function(){....})

function firstClass(x){
    x();
}
var ab = firstClass(function(){console.log('This is a first class function as argument.')})

// similarly we can return a function as value
function firstClass1(){
    return function (){}
}
console.log(firstClass1()); // will return a functions



/*  Interview Questions

Q1 : 



*/

