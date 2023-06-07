class People {
  public getSalary = (name: "Abir", age: number, height: number): number => {
    return height * age * 2 * 1000;
  };
}

const result = new People();
console.log(result.getSalary("Abir", 25, 5.6));
