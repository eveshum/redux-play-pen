import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { alert: "alert message" };
  }
  doSomething = () => {
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
