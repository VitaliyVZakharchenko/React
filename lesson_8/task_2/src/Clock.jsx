import React, { Component } from "react";
import moment from "moment";
// import "./index.scss";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
    //   location: props.location,
    //   offset: props.location,
      time: moment(getTimeWithOffset(props.offset)).format("h:mm:ss A"),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: moment(getTimeWithOffset(this.props.offset)).format("h:mm:ss A"),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
