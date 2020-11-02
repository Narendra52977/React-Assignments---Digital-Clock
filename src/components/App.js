import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clock: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ clock: new Date().toLocaleTimeString() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="App">
        <div className="Clock">
          <h3 id="time">{this.state.clock}</h3>
        </div>
      </div>
    );
  }
}

export default App;
