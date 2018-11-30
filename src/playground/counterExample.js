class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("hello..");
    if (prevState.count !== this.state.count) {
      console.log("hello. count not is not equal.");
      localStorage.setItem("count", this.state.count);
    }
  }

  componentDidMount() {
    console.log("hello..componentDidMount");
    const stringCount = localStorage.getItem("count");
    console.log("stringCount", stringCount);

    const count = parseInt(stringCount, 10);
    console.log("countlocal", count);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1> Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
// const appObject = {
//   title: "Indecision App",
//   subTitle: "Put your life in the hands of a Computer",
//   options: ["One", "two"]
// };

// const template = (
//   <div>
//     <h1> {appObject.title}</h1>
//     {appObject.subTitle && <p>{appObject.subTitle} </p>}

//     {appObject.options.length > 1 ? <p>Here are your options</p> : "No options"}
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// );
// const user = {
//   name: "Ranjith Ramalingam",
//   age: 19,
//   location: "Seattle"
// };

// function getLocation(location) {
//   if (location) return <p>Location : {location}</p>;
//   else return "unknow";
// }

// const templateChallenge = (
//   <div>
//     <h1>{user.name ? user.name : "Not Known"}</h1>
//     {user.age >= 18 && <p>Age: {user.age} </p>}
//     {getLocation(user.location)}
//   </div>
// );
// let count = 0;
// const addOne = () => {
//   count = count + 1;
//   counterRenderer();
// };
// const minusOne = () => {
//   count = count - 1;
//   counterRenderer();
// };
// const reset = () => {
//   count = 0;
//   counterRenderer();
// };

// const appElement = document.getElementById("app");

// const counterRenderer = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <p />
//       <button onClick={minusOne}>-1</button>
//       <p />
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appElement);
// };
// counterRenderer();
