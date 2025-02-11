/*
// var has a gloabal scope 
var a=33;
{
    let a=55; // 55
}
console.log(a); // a is pointing to the var=33 because it is in the global scope.

// In the above example nothing fancy is happening in the block a is 55 and outside 
// the block a is 33;


*/




/* 
This is a syntax error 

let a=33;
{
    var a=55;
}


// Hoisting makes JavaScript interpret the code like this:
let a = 33;  // Declare 'a' (block-scoped)
var a;       // ❌ SyntaxError: Redeclaration of 'a' using var is not allowed!
{
    a = 55;  // This would have assigned 55 to 'a' if it were valid
}
 


 */




/* 
let a =55;
function am(){
    var a = 66;
    console.log('Inside function body a is : ',a);
}
am();
console.log('Outside the function body a is : ',a);

// Now this is completely fine as functions has their own scope.
// So does this mean that here var a = 66 ; is not hoisted ? 
// it is hoisted but in the local storage of the function
// that means we have three scopes 
// 1. Local 2.Global 3.Block
// Local is function scope
// Global is availaible anywhere in the program
// Block is availaible only in that particular block 
 
*/


