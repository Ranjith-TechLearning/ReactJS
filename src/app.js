console.log("App.js is running");

let appObject = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a Computer"
};
let template = (
  <div>
    <h1> {appObject.title}</h1>
    <p>{appObject.subTitle} </p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
let user = {
  name: "Ranjith Ramalingam",
  age: "27",
  location: "Renton"
};
let templateChallenge = (
  <div>
    <h1>{user.name.toUpperCase() + "!"}</h1>
    <p>Age: {user.age} </p>
    <p>Location: {user.location}</p>
  </div>
);

let appElement = document.getElementById("app");
ReactDOM.render(template, appElement);
