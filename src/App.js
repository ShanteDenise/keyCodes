import React, { Component } from "react";

class App extends Component {
    state = {
      keyCode: "Press key"
  }

  componentDidMount (){
    document.addEventListener("keydown", this.setKeyCode);
  }
  setKeyCode = (e) => {
    this.setState({
      keyCode: e.keyCode,
      key: e.key,
      which: e.which,
      code: e.code
    });
  }

  render =() => {
    const { keyCode, key, which, code } = this.state;
    return (
      <div className="App">
        <div className="App__KeyCode">{keyCode}</div>
        {keyCode !== "Press key" && (
          <div className="Box__Container">
            <div className="Box">
              <h2>event.key</h2>
              <span>{key}</span>
            </div>
            <div className="Box">
              <h2>event.which</h2>
              <span>{which}</span>
            </div>
            <div className="Box">
              <h2>event.code</h2>
              <span>{code}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}


export default App;
