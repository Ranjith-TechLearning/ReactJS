console.log("App.js is running");

const appObject = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a Computer",
  options: ["One", "two"]
};

const template = (
  <div>
    <h1> {appObject.title}</h1>
    {appObject.subTitle && <p>{appObject.subTitle} </p>}

    {appObject.options.length > 1 ? <p>Here are your options</p> : "No options"}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
const user = {
  name: "Ranjith Ramalingam",
  age: 19,
  location: "Seattle"
};

function getLocation(location) {
  if (location) return <p>Location : {location}</p>;
  else return "unknow";
}

const templateChallenge = (
  <div>
    <h1>{user.name ? user.name : "Not Known"}</h1>
    {user.age >= 18 && <p>Age: {user.age} </p>}
    {getLocation(user.location)}
  </div>
);
const addOne = () => {
  console.log("add one");
};
const minusOne = () => {
  console.log("minus One");
};
const reset = () => {
  console.log("reset");
};
let count = 0;
const templateTwo = (
  <div>
    <h1>Count : {count}</h1>
    <button onClick={addOne}>+1</button>
    <p />
    <button onClick={minusOne}>-1</button>
    <p />
    <button onClick={reset}>Reset</button>
  </div>
);

const appElement = document.getElementById("app");
ReactDOM.render(templateTwo, appElement);
