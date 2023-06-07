class People {
  constructor(public name: string, public age: number, public height: number) {}
  public getSalary = (): number => {
    return this.height * this.age * 2 * 1000;
  };
}

const resultOj = new People("Abir", 25, 5.6);
// console.log(resultOj);

class Student extends People {
  constructor(name: string, age: number, height: number, public roll: number) {
    super(name, age, height);
    this.roll = roll;
  }
}

const student_1 = new Student("Mr. Doctor", 18, 5.5, 12);
console.log(student_1);


