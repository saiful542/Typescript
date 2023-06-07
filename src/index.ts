// it cant be assigned other types of variable in predefined variables in typescript
// it can be done when the variable is is not defined
const stringVariable: string = " testing testVariable";
const arrayOfNumbers: number[] = [1, 2, 3];
const arrayOfstrings: string[] = ["jobbar", "karim", "habib"];
const arrayOfAll_types = ["jobbar", 2, true];
const tuples: [string, boolean, number] = ["jobbar", true, 55]; //touples act like couples

// objects
const object: {
  company: string;
  name: string;
  age: number;
  wife?: string; // '?:' means that the variable wife can be absent
  //  but if it is present it will be a string
} = {
  company: "echologyxdd",
  name: "Abir",
  age: 25,
};
object.company = "da";
let isAdmin: boolean = false;
isAdmin = true;

// functions
const newFunction = (name: string): string => {
  return name;
};

const person: {
  name: string;
  salary: number;
  method(given: number): number;
} = {
  name: "Abir",
  salary: 20,
  method(given: number): number {
    return Math.floor(this.salary) + given;
  },
};

// rest parameters
const greetFriends = (...friends: string[]): void => {
  // console.log(friends)
};
greetFriends("adel", "nazim", "alif");

//ALIAS//
// we can use type to declare an object/variable to custom type
type Person = string;
const names: Person = "Al";
// console.log(names);

type employee = {
  name: string;
  age: number;
  salary: number;
  address?: string;
};

const employee_manager: employee = {
  name: "adel",
  age: 22,
  salary: 20,
};
const employee_SE: employee = {
  name: "abir",
  age: 25,
  salary: 10,
};

// console.log(employee_manager, employee_SE);

// special case for alis
type operationType = (a: number, b: number) => number;
const test = (a: number, b: number, operation: operationType) => {
  return operation(a, b);
};
// console.log(test(1, 2, (a, b) => a + b));
// console.log(test(1, 2, (a, b) => a - b));

type noob = {
  name: string;
};
type junior = noob & {
  designation: string;
};
type senior = junior & {
  designation: string;
  level?: "senior" | "mid-senior";
};

const person_: junior | senior = {
  name: "John",
  designation: "Software Engineer",
  level: "mid-senior",
};

// console.log(person_);

let variable: any;
variable = "fifht vc";

variable.length;
// console.log(variable.length);

interface yolo {
  [index: number]: string;
}

const test_11: yolo = ["fb"];
// console.log(test_11);

type generic<T, B> = [T, B];
const rollNumber: generic<string, number> = ["dss", 2];
type object_33<t> = {
  name: string;
  roll: t;
};

const student: generic<object_33<number>, string> = [
  {
    name: "John",
    roll: 22,
  },
  "hello world",
];
// console.log(student)

// generic function

const genericFunction = <T, D>(peram1: T, peram2: D): [T, D] => {
  return [peram1, peram2];
};

// console.log(genericFunction<string, number[]>('Abir', [5,5,4]));
interface custom_Ob {
  name: string;
  roll: number;
}
const result11 = genericFunction<string, custom_Ob[]>("Abir", [
  { name: "Abir", roll: 33 },
]);
// console.log(result11);

const practiceGenericFunction = (myInfo: any) => {
  const string = "is a bad boy";
  const newData = 103;
  return [string, myInfo];
};
// console.log(practiceGenericFunction('yellow'));

interface custom_obj_type {
  name: string;
  age: number;
}
const getFunction = <X, Y extends keyof X, Z extends keyof X>(
  obj: X,
  key1: Y,
  key2: Z
): unknown => {
  return [obj[key1], obj[key2]];
};

let custom_obj: custom_obj_type = { name: "Abir", age: 25 };
const result111 = getFunction(custom_obj, "name", "age");

// console.log(result111);

