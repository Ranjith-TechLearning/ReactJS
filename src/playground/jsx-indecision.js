console.log("App.js is running");

const appObject = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a Computer",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  console.log("Form Submitted!");
  const option = e.target.option.value;
  console.log(option);
  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = "";
    renderPage();
  }
  console.log(appObject.options);
};

const onMakeDecision = e => {
  const randomNum = Math.floor(Math.random() * appObject.options.length);
  const valuePicked = appObject.options[randomNum];
  alert(valuePicked);
};

const onremoveAll = e => {
  appObject.options = [];
  renderPage();
};

const appElement = document.getElementById("app");

const renderPage = () => {
  const template = (
    <div>
      <h1> {appObject.title}</h1>
      {appObject.subTitle && <p>{appObject.subTitle} </p>}

      {appObject.options.length > 0 ? (
        <p>Here are your options</p>
      ) : (
        "No options"
      )}
      <p />
      <button onClick={onMakeDecision}>What Should I do </button>
      <button disabled={appObject.options.length == 0} onClick={onremoveAll}>
        Remove All
      </button>

      <ol>
        {appObject.options.map(arr => (
          <li key={arr}>{arr}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option </button>
      </form>
    </div>
  );
  ReactDOM.render(template, appElement);
};
renderPage();
