"use strict";

console.log("App.js is running");

var appObject = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a Computer",
  options: ["One", "two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " ",
    appObject.title
  ),
  appObject.subTitle && React.createElement(
    "p",
    null,
    appObject.subTitle,
    " "
  ),
  appObject.options.length > 1 ? React.createElement(
    "p",
    null,
    "Here are your options"
  ) : "No options",
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);
var user = {
  name: "Ranjith Ramalingam",
  age: 19,
  location: "Seattle"
};

function getLocation(location) {
  if (location) return React.createElement(
    "p",
    null,
    "Location : ",
    location
  );else return "unknow";
}

var templateChallenge = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Not Known"
  ),
  user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age,
    " "
  ),
  getLocation(user.location)
);
var addOne = function addOne() {
  console.log("add one");
};
var minusOne = function minusOne() {
  console.log("minus One");
};
var reset = function reset() {
  console.log("reset");
};
var count = 0;
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count : ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement("p", null),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement("p", null),
  React.createElement(
    "button",
    { onClick: reset },
    "Reset"
  )
);

var appElement = document.getElementById("app");
ReactDOM.render(templateTwo, appElement);
