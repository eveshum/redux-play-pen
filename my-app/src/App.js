import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { message: "message", timesLogged: 0 };
  }
  log = () => {
    // do not use this.setState
    // Part 1. When the button is clicked, you should change the message to
    // the text in the input
    // Part 2. Every time the button is clicked increment the number of times
    // logged value.  Use a different reducer than part 2
    const message = document.getElementById('message-input').value
    alert(message);
  };
  reset = () => {
    // Part 3. Implement a new action that resets the message and counter
    alert("reset");
  };

  render() {
    return (
      <div className="App">
        <input id="message-input" length="100"/>
        <button onClick={this.log} id="mybutton">
          Log
        </button>
        <button onClick={this.reset} id="mybutton">
          Reset
        </button>
        <div>
          <p>Message: {this.state.message}</p>
          <p>Number of times logged: {this.state.timesLogged}</p>
        </div>
      </div>
    );
  }
}

export default App;
