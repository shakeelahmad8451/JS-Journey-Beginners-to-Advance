//"use strict"

// points to global --> window
console.log(this)

//points to global --> window
function xyz(){
    console.log(this)
}
xyz();

//points to undefined in 'Strict Mode' 
/* function xyz(){
    console.log(this)
}
xyz(); */

//points to global even in case of 'strict mode'
function xyz(){
    console.log(this)
}
window.xyz();

// in object it points to the object itself
const person = {
    name:'ali',
    greet: function sayName(){
        console.log(this);
    }
}
person.greet()

// what if the function is an arrow
// it points to the lexical scope of its parent(person1) which is window
const person1 = {
    name:'ali',
    greet: ()=>{
        console.log(this);
    }
}
person1.greet()

// now this will point to person2 because it is the lexical scope of its parent function sayName()
const person2 = {
    name:'ali',
    greet: function sayName(){
        (()=>{
            console.log(this);
        })();
    }
}
person2.greet()
