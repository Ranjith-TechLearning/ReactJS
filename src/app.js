class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = "This is a subtitle";
    const optionsarr = ["Option one", "Option two", "Option three"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={optionsarr} />
        <AddOptions />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  handlePick() {
    alert("handle pick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should i do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert("handle Remove all");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>

        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
class AddOptions extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    let option = e.target.option.value.trim();
    option && alert(option);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
