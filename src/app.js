class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOptions />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return <p>This is from Header</p>;
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should i do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Option Components go hear
        <Option />
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return (
      <ol>
        <li>Read</li>
        <li>Write</li>
      </ol>
    );
  }
}
class AddOptions extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
