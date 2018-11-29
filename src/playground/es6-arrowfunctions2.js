//Argument Object = no longer boud with arrow function
//this key word is also no longer bound with arrow function
const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

const user = {
  name: "Ranjith",
  cities: ["Seattle", "Renton"],
  //   printPlaceLived() {
  //     this.cities.forEach(city => {
  //       console.log(this.name + "has lived in " + city);
  //     });
  //   }
  printPlaceLived() {
    const citiMessage = this.cities.map(
      city => this.name + "has lived in " + city + "!"
    );
    return citiMessage;
  }
};
console.log(user.printPlaceLived());

// Challenge

const multiplier = {
  number: [10, 20, 30],
  muliplyBy: 10,
  multiply() {
    return this.number.map(x => x * this.muliplyBy);
  }
};
console.log(multiplier.multiply());
