// Fundamentals of java script
// arrays and objects
// functions return
// async js coding

// Inside the array we learn about the forEach, indexOf, find and filter

var arr = [1,2,3]
arr.forEach(function(val){
    console.log(val + " hello ");
})

var arr = [1,2,3,4];
var ans = arr.map(function(val){
    return 13;
})
console.log(ans);

var arr = [1,2,3,4];
var ans = arr.map(function(val){
    return val*3;
})
console.log(ans);

var arr = [1,2,3,4]

var ans = arr.filter(function(val){
    if(val>=3) {return true;}
    else return false;
})
console.log(ans);

var arr = [1,2,3,4]
var ans = arr.find(function(val){
    if(val === 2) return val;
})
console.log(ans);

var arr = [1,2,3,4]
var ans = arr.find(function(val){
    if(val === 12) return val;
})
console.log(ans);
// Now it produce undefined as output because inside the array 12 is not exist.

var arr = [1,2,3,4]
arr.indexOf(12)  // now it produce -1 because 12 has not any index.

arr.indexOf(2)  // now it produce 1 because the index of 2 is 1.

// Let's understand about the objects and which are important.

// A object is a collection of key-value pairs used to store related data and functionality together.
// for eg, if want to store the information of any student then we create a object

let student = {
    name: "anuj",
    age: 25,
    branch:"ECE",
    college: "SLIET"
};
console.log(student);    // here student is an object.

// How can we access the value of the object ?
// method 1: Dot Notation
let student1 = {
    name: "anuj",
    age: 25,
    branch:"ECE",
    college: "SLIET"
};
console.log(student.name);
console.log(student.age);

// Method 2: Bracket notation
console.log(student["name"]);
console.log(student["age"]);

// bracket notation is useful when the name of property is stored inside the variable.

// How can you add new property inside the object
let student2 = {
    name: "anuj",
    age: 25,
    branch: "ECE"
};
student.cgpa = 9.7;
console.log(student);

// methods in objects -> when we stored a function inside the property of object then this function is known as method.
let Male = {
    name: "Anuj",

    greet: function(){
        console.log("Hello, I am Anuj");
    }
};
Male.greet();
// Now understand this code, here Male-> object, name-> property, greet-> method, Male.greet()-> call the method.
// we also write this in the short form
let male = {
    name: "anuj",
    greet(){
        console.log("Hello!");
    }
};
male.greet();

// Let's understand about 'this' keyword
let person = {
    name: "anu",
    branch: "ECE",
    introduce() {
        console.log("My name is " + this.name);
        console.log("My branch is " + this.branch);
    }
};
person.introduce();
// 'This' refer to the object of that method which is call through student.introduce().
// by using Object.freeze(obj) we can't change or update the value of object.

// Can you find the function length ? yes
function abcd(a,b,c){

}
console.log(abcd.length);
// no of parameters that we pass inside the function is known as length of function.
// function is an object in the javascript.

function abc(){
    return 12;
}



var ans = abc();  // here we call the function.
console.log(ans);

// now understand asynchronous javascript coding.
var blob = await fetch(`https://randomuser.me/api/`);
var res = await blob.json();
console.log(res);

// when code is run line by line -> synchronous
// which code is async nature, sends to side stack and run the next code whose is sync nature.
// when all sync code run means when main stack is empty then check "async code complete hua ya nhi"
// if it complete then take(async code) into main stack and code run kara do.  that's asynchronous js coding.

async function abcde(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();

    console.log(ans.results[0].name);
}

abcde();                      // after function calling