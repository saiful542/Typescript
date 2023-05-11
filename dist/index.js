"use strict";
// it cant be assigned other types of variable in predefined variables in typescript
// it can be done when the variable is is not defined
const stringVariable = " testing testVariable";
const arrayOfNumbers = [1, 2, 3];
const arrayOfstrings = ['jobbar', 'karim', 'habib'];
const arrayOfAll_types = ['jobbar', 2, true];
const tuples = ['jobbar', true, 55]; //touples act like couples
// objects
const object = {
    company: 'echologyxdd',
    name: "Abir",
    age: 25,
};
object.company = 'da';
let isAdmin = false;
isAdmin = true;
// functions
const newFunction = (name) => {
    return name;
};
const person = {
    name: 'Abir',
    salary: 20,
    method(given) {
        return Math.floor(this.salary) + given;
    }
};
// rest parameters
const greetFriends = (...friends) => {
    // console.log(friends)
};
greetFriends('adel', 'nazim', 'alif');
const names = 'Al';
const employee_manager = {
    name: 'adel',
    age: 22,
    salary: 20,
};
const employee_SE = {
    name: 'abir',
    age: 25,
    salary: 10,
};
const test = (a, b, operation) => {
    return operation(a, b);
};
const person_ = {
    name: 'John',
    designation: 'Software Engineer',
    level: 'mid-senior'
};
// console.log(person_);
let variable_1;
variable_1 = '55'(variable_1).length;
console.log(variable_1);
