import React, { Component } from "react";
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import "./App.css";
import rootReducer from './reducer.js';
import { logMessage, resetLogs } from './actions.js';

class App extends Component {
  log = () => {
    // do not use this.setState
    // Part 1. When the button is clicked, you should change the message to
    // the text in the input
    // Part 2. Every time the button is clicked increment the number of times
    // logged value.  Use a different reducer than part 2
    const message = document.getElementById('message-input').value
    this.props.logMessage(message);
  };
  reset = () => {
    // Part 3. Implement a new action that resets the message and counter
    this.props.resetLogs();
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
          <p>Message: {this.props.message}</p>
          <p>Number of times logged: {this.props.timesLogged}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message.message,
  timesLogged: state.logMetrics.timesLogged,
});

const mapDispatchToProps = dispatch => ({
  logMessage: bindActionCreators(logMessage, dispatch),
  resetLogs: bindActionCreators(resetLogs, dispatch),
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

const AppContainer = () => {
  const store = createStore(
    rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}

export default AppContainer;
