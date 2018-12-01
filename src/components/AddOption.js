import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  constructor(props) {
    super(props);
  }
  handleAddOption = e => {
    e.preventDefault();
    let option = e.target.option.value.trim();
    const error = this.props.handleAdd(option);

    this.setState(() => ({ error: error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
