console.log("App.js is running");

let appObject = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a Computer",
  options: ["One", "two"]
};

let template = (
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
let user = {
  name: "Ranjith Ramalingam",
  age: 19,
  location: "Seattle"
};

function getLocation(location) {
  if (location) return <p>Location : {location}</p>;
  else return "unknow";
}

let templateChallenge = (
  <div>
    <h1>{user.name ? user.name : "Not Known"}</h1>
    {user.age >= 18 && <p>Age: {user.age} </p>}
    {getLocation(user.location)}
  </div>
);

let appElement = document.getElementById("app");
ReactDOM.render(template, appElement);
