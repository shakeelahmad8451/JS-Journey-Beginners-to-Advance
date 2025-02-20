console.log('******* Call Apply and Bind JS file code ******** ')

// Function Borrowing 
const student = {
    fullName : function (){
        return `${this.firstName} ${this.lastName}`
    }
}
// console.log(student.fullName())  // undefined undefined

const student1 = {
    firstName: 'John',
    lastName: 'Doe'
}
// this object does not have its own fullName method but it can borrow it from the student object
console.log(student.fullName(student1)) // undefined undefined same as in line 9
// but there is a problem we can access the fullName method but we cannot change its this reference


// Here comes the call method
console.log(student.fullName.call(student1)) // john doe

// What if fullName in student takes extra parameter
/* 
const student = {
    fullName : function (city,country){
        return `${this.firstName} ${this.lastName} and i live in ${city}, ${country}`
    }
} 

const student1 = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log(student.fullName.call(student1,'New York','usa')) // john doe and i live in New York, usaa



*/

//But there lies a problem with that what if the fullName funcions takes 100s of arguments we need to recieve them by comman sepration and this will be a headache
// Here comes APPLY() : that can take the arguments it an ARRAY

// Apply is similar to call() method except it takes other arguments as array
const teacher = {
    fullName: function(city,country){
        return `${this.firstName} ${this.lastName} and i live in ${city}, ${country}`
    }
}

const teacher1 = {
    firstName: 'Umair',
    lastName: 'Sadiq'
}

console.log(teacher.fullName.apply(teacher1,["London","UK"]))

const arr=[2,3,4,5]
console.log(Math.max.apply("",[...arr]))


// this is ok but there lies a pronlem
// when we pass the function to a call back function i,e settimeout the value of this points to globla object and this loses its value
const son = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  }
  
  setTimeout(son.display, 3000);
/*  The issue arises because of how this works in JavaScript. 
    When person.display is passed directly to setTimeout, the 
    function loses its connection to the person object. As a result,
    this inside the display function no longer refers to person. 
    Instead, this defaults to the global object (in non-strict mode,
    window in browsers) or undefined (in strict mode). Since 
    window.firstName and window.lastName are undefined, 
    the output is undefined undefined.
 */

// Here comes the Apply
const son1 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  }
  
  setTimeout(son1.display.bind(son1), 3000);
//   bind returns a new function with the same code as the original function but with a fixed this value.

/* 
Comparison with call and apply
call and apply:

Immediately invoke the function with a fixed this value and arguments.

Do not create a new function.

bind:

Creates a new function with a fixed this value and optionally pre-filled arguments.

Does not immediately invoke the function.

*/