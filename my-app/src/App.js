import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { alert: "alert message" };
  }
  doSomething = () => {
    // When the button is clicked, you should change the alert message to
    // "the button was clicked"
    // do not use this.setState
    alert("hello");
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.doSomething} id="mybutton">
          I am a button
        </button>
        <div>
          <p>{this.state.alert}</p>
        </div>
      </div>
    );
  }
}

export default App;
