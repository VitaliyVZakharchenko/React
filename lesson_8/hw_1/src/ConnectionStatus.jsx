import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online",
  };

  componentDidMount() {
    window.addEventListener("online", this.statusOnline);
    window.addEventListener("offline", this.statusOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.statusOnline);
    window.removeEventListener("offline", this.statusOffline);
  }

  statusOffline = () => {
    this.setState({
      status: "offline",
    });
  };

  statusOnline = () => {
    this.setState({
      status: "online",
    });
  };

  render() {
    const { status } = this.state;
    const chengeClassName = `status ${status === "offline"
    ? "status_offline" : ""}`;
    return <div className={chengeClassName}>{status}</div>;
  }
}

export default ConnectionStatus;