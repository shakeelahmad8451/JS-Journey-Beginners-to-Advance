const student = {
    name: 'Ali',
    city: 'Lahore',

    greet: function intro(){
        console.log(`My name is ${this.name} and I lives in ${this.city}`);
    }

    // toString: function fullName(){ ...} we cannot do that because this method is already defined in the prototype of the student
}

// Now these are all the properties of the Student Object and are accessible with dot notation.
console.log(student.name);
console.log(student.city)
student.greet(); 

// Now try to to access the properties of the student in the browser console with  student.
// And you can see a lot other properties availaibe
//    From where they are coming ?
//    These properties are coming from the student proptotype

/* 
    student.__proto__ --> gives what is inside the prototype of the student object because it is the student's prototype
    student.__proto__.__proto__ --> gives null because the last prototype points to null
    Although the standard way of getting the prototype of an object is Object.getPrototypeOf(student)

    Now its the student.__proto__ that provides us all the properties i.e toString() and other 

    // ******* Prototype Chain ********
        const myDate = new Date();
        let object = myDate;

        do {
        object = Object.getPrototypeOf(object);
        console.log(object);
        } while (object);

        // Date.prototype
        // Object { }
        // null

        myDate --> Date --> Date Protoype --> Date Prototype's Prototype --> NULL
        When we create an object of existing object the existing object becomes the prototype of that object (myDate) and that object has also 
        a proto and that proto has also a proto which points to NULL. 

*/

// we can even make our own prototype object and set other objects prototype to this object

const prototypePerson = {
    greet : function(){
        console.log('Hello from prototypePerson Object.')
    }
}


// Now we will create one object that will point to this prototypePerson object.  ali.__proto__ points to the prototypePerson Object
const ali = Object.create(prototypePerson);
// Now the prototype of the the ali will be prototypePerson object --> prototype --> protype's prototype --> NULL

ali.greet(); // first the engine will look the property in the object ali when it finds nothing there then it go to its prototype where greet is defined




// With the help of prototypes we can achieve Inheritance we can put the shared code in one object and then makes that object prototype of child objects

// Base person object
const person = {
    name: 'N',
    age: 'A'
};

// Teacher object inheriting from person
const teacher = Object.create(person);
teacher.greet = function() {
    console.log('Hello, I am a teacher.');
};

// Student object inheriting from person
const student1 = Object.create(person);
student1.greet = function() {
    console.log('Hello, I am a student.');
};

// Creating instances of teacher and student
const t1 = Object.create(teacher);
const s1 = Object.create(student1);

// Setting properties for the instances
t1.name = 'Mr. Smith';
t1.age = 40;

s1.name = 'Alice';
s1.age = 20;

// Testing the instances
console.log(`Teacher: My name is ${t1.name} and my age is ${t1.age}`);
t1.greet(); // Output: Hello, I am a teacher.

console.log(`Student: My name is ${s1.name} and my age is ${s1.age}`);
s1.greet(); // Output: Hello, I am a student.
