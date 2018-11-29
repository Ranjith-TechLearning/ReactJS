class Person {
  constructor(name = "Anonymous", age = 21) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    console.log();
    return `${this.name} is ${this.age} year(s) old`;
  }
}

const person1 = new Person("Ranjith Ramalingam", 35);
console.log(person1.getDescription());

const person2 = new Person();
console.log(person2.getDescription());
