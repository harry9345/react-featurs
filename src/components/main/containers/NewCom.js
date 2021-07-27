import React, { Component } from "react";
import classes from "../../../style/All.module.css";

class NewCom extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
    };
    this.inputEl = React.createRef();
  }
  showValue = () => {
    this.setState({ inputVal: this.inputEl.current.value });
  };
  render() {
    return (
      <>
        <input
          className={classes.input}
          type="text"
          ref={this.inputEl}
          placeholder="newCom"
          onKeyUp={this.showValue}
        />
        <br />
        <p>{this.state.inputVal}</p>
      </>
    );
  }
}

export default NewCom;
