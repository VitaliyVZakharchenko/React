import React from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusButton: "Off",
    };
  }

  changeStatusButton = () => {
    this.setState(() => {
      return {
        statusButton: this.state.statusButton === "Off" ? "On" : "Off",
      };
    });
  };

  render() {
    return (
      <>
        <button className="toggler" onClick={this.changeStatusButton}>
          {this.state.statusButton}
        </button>
      </>
    );
  }
}

export default Toggler;