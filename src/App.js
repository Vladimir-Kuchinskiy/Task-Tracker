import React, { Component } from "react";
import Board from "./components/board";
import "./App.css";

class App extends Component {
  state = { show: false };
  render() {
    return (
      <div>
        <div className="App">
          <div className="ui">
            <nav className="navbar app">Task Tracker</nav>
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
