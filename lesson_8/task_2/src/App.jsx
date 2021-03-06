import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  state = {
    visible: true,
  };

  toogle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toogle}>Toogle</button>
        {this.state.visible && <Clock location={"New York"} offset={-5} />}
        {this.state.visible && <Clock location={"London"} offset={0} />}
        {this.state.visible && <Clock location={"Kyiv"} offset={2} />}
      </>
    );
  }
}

export default App;
