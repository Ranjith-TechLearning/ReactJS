"use strict";

console.log("App.js is running");

var appObject = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a Computer"
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
  React.createElement(
    "p",
    null,
    appObject.subTitle,
    " "
  ),
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
  age: "27",
  location: "Renton"
};
var templateChallenge = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name.toUpperCase() + "!"
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age,
    " "
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appElement = document.getElementById("app");
ReactDOM.render(template, appElement);
