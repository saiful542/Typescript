class People {
  constructor(public name: string, public age: number, public height: number) {}
  public getSalary = (): number => {
    return this.height * this.age * 2 * 1000;
  };
}

const resultOj = new People("Abir", 25, 5.6);
// console.log(resultOj);

// inheritance
class Student extends People {
  private _roll: number = 200;
  constructor(name: string, age: number, height: number, roll: number) {
    super(name, age, height);
  }
  public output(): number {
    return this.getSalary();
  }
}

const student_1 = new Student("Mr. Doctor", 18, 5.5, 12);
// console.log(student_1.output());

class Teacher extends People {
  static wife: boolean = true;  //using static properties
  constructor(name: string, age: number, height: number) {
    super(name, age, height);
  }
  public getIncreamnement(): string {
    return `${this.name}, ${this.age}`;
  }
}

const teacher1 = new Teacher("Mr. Teacher", 28, 5.7);
// console.log(teacher1.getIncreamnement());
// console.log(Teacher.wife);     //accessing static properties using class name
