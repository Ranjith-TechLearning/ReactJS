import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModel from "./OptionModel";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const valuePicked = this.state.options[randomNum];
    console.log(valuePicked);
    this.setState(() => ({
      selectedOption: valuePicked
    }));
  };

  handleModalOk = () => {
    console.log("handleModalOk called..");
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handleAdd = option => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exist";
    }
    this.setState(prev => ({ options: prev.options.concat(option) }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //do nothing...
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // This would get called everytime when the component is referesed.
    if (prevState.options.length !== this.state.options.length) {
      console.log("Saving Data");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  ComponentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const subTitle = "Put you life in the hands of a computer";

    return (
      <div>
        <Header subTitle={subTitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAdd={this.handleAdd} />
          </div>
        </div>

        <OptionModel
          selectedOption={this.state.selectedOption}
          handleModalOk={this.handleModalOk}
        />
      </div>
    );
  }
}
