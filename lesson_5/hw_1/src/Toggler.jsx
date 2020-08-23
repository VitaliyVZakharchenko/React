import React from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusButton: "OFF",
    };
  }

  changeStatusButton = () => {
    this.setState(() => {
      return {
        statusButton: this.state.statusButton === "OFF" ? "ON" : "OFF",
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
