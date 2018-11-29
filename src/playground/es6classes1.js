class Person {
  constructor(name = "Anonymous", age = 21) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    console.log();
    return `${this.name} is ${this.age} year(s) old`;
  }
  getGreeting() {
    return `Hi. I am ${this.name} `;
  }
}

class Student extends Person {
  constructor(name, age, major = "Science") {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    return description + ` and their major is ${this.major} `;
  }
}

const person1 = new Student("Ranjith Ramalingam", 35, "computer science");
console.log(person1.getDescription());

const person2 = new Student();
console.log(person2.getDescription());

class Traveler extends Person {
  constructor(name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation;
  }
  getGreeting() {
    const greetingFromSuper = super.getGreeting();
    return this.homelocation
      ? greetingFromSuper + ` I am visiting from ${this.homelocation}`
      : greetingFromSuper;
  }
}

const traveller1 = new Traveler("Ranjith", 28, "Seattle");
console.log(traveller1.getGreeting());

const traveller2 = new Traveler("Ranjith", 28);
console.log(traveller2.getGreeting());
