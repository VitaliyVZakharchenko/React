import React, { Component } from "react";

class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleDialog = () => {
    this.state.isOpen
      ? this.setState({
          isOpen: false,
        })
      : this.setState({
          isOpen: true,
        });
  };

  render() {
    const { children, title } = this.props;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.handleDialog}>
            {this.state.isOpen ? "↑" : "↓"}
          </button>
        </div>
        {this.state.isOpen ? (
          <div className="expand__content">{children}</div>
        ) : null}
      </div>
    );
  }
}

export default Expand;
