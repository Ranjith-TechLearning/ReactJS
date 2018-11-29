"use strict";

console.log("App.js is running");

var appObject = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a Computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log("Form Submitted!");
  var option = e.target.elements.option.value;
  console.log(option);
  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = "";
    renderPage();
  }
  console.log(appObject.options);
};

var onMakeDecision = function onMakeDecision(e) {
  var randomNum = Math.floor(Math.random() * appObject.options.length);
  var valuePicked = appObject.options[randomNum];
  alert(valuePicked);
};

var onremoveAll = function onremoveAll(e) {
  appObject.options = [];
  renderPage();
};

var appElement = document.getElementById("app");

var renderPage = function renderPage() {
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
    appObject.options.length > 0 ? React.createElement(
      "p",
      null,
      "Here are your options"
    ) : "No options",
    React.createElement("p", null),
    React.createElement(
      "button",
      { onClick: onMakeDecision },
      "What Should I do "
    ),
    React.createElement(
      "button",
      { disabled: appObject.options.length == 0, onClick: onremoveAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      appObject.options.map(function (arr) {
        return React.createElement(
          "li",
          { key: arr },
          arr
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option "
      )
    )
  );
  ReactDOM.render(template, appElement);
};
renderPage();
