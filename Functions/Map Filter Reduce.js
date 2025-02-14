// array of objects
const users = [
    {firstName:'ali',lastName:'muhammad',age:23},
    {firstName:'ahsan',lastName:'amjad',age:20},
    {firstName:'asad',lastName:'kher',age:90}
    
    ];
    
// problem using either map,filter or reduce get all the firstName of the users in an array i.e ['ali','alii','aliii']
// then fullName i.e ['ali muhammad','ahsan amjad','asad kher']

const firstNames = users.map((user)=>user.firstName);
const fullNames = users.map((user)=>user.firstName+" "+user.lastName);

console.log('firstName of the users using map : ',firstNames);
console.log('fullName of the users using map : ',fullNames);

// find all the user whose age is less than 30
const youngUsers = users.filter((user)=>{
    //if(user.age < 30) return user; this is same as the below
    return user.age<30
})

console.log(youngUsers); // will give us two objects

// Now what if we want the first Name of the users whose age is less than 30
// At this point we have the objects or users whose age is less than 30 in the 'youngUser' array. we now have to extract the first name out of them and we have done that before yes exactly with the map method. Now we only need to add the map function also.\
const youngUsersFirstNames = users.filter((user)=>user.age < 30).map((user)=>user.firstName);
console.log('Young Users first names using filter and map : ',youngUsersFirstNames);


// so reduce take two arguments (acc,current) a call backfunction and the second is the initial value lets say we want to sum the ages of the users.
const sumAges = users.reduce((acc,curr)=>{
  return  acc+=curr.age;
},0); // this 0 specifies the initial value of the acc 
console.log('Sum of the all users ages using reduce : ',sumAges);

// using reduce do the same give the firstNames of the users whose age is less than 30







