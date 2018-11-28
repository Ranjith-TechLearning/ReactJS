"use strict";

//Argument Object = no longer boud with arrow function
//this key word is also no longer bound with arrow function
var add = function add(a, b) {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

var user = {
  name: "Ranjith",
  cities: ["Seattle", "Renton"],
  //   printPlaceLived() {
  //     this.cities.forEach(city => {
  //       console.log(this.name + "has lived in " + city);
  //     });
  //   }
  printPlaceLived: function printPlaceLived() {
    var _this = this;

    var citiMessage = this.cities.map(function (city) {
      return _this.name + "has lived in " + city + "!";
    });
    return citiMessage;
  }
};
console.log(user.printPlaceLived());

// Challenge

var multiplier = {
  number: [10, 20, 30],
  muliplyBy: 10,
  multiply: function multiply() {
    var _this2 = this;

    var multipliedValues = this.number.map(function (x) {
      return x * _this2.muliplyBy;
    });
    return multipliedValues;
  }
};
console.log(multiplier.multiply());
