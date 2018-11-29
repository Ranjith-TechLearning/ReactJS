console.log("Hello this is Visibility Toggle button");
const htmlDivElement = document.getElementById("app");
let visibility = false;

const toggleVisibility = () => {
  console.log("Button clicked");
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1> Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      {<p>{visibility && "I am showing offf......"}</p>}
    </div>
  );
  ReactDOM.render(template, htmlDivElement);
};
render();
