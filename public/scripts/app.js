"use strict";

console.log("Hello this is Visibility Toggle button");
var htmlDivElement = document.getElementById("app");
var visibility = false;

var toggleVisibility = function toggleVisibility() {
  console.log("Button clicked");
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibility },
      visibility ? "Hide Details" : "Show Details"
    ),
    React.createElement(
      "p",
      null,
      visibility && "I am showing offf......"
    )
  );
  ReactDOM.render(template, htmlDivElement);
};
render();
