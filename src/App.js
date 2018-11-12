import React, { Component } from "react";
import "./App.css";
import Board from "./components/board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui">
          <nav className="navbar app">Task Tracker</nav>
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
