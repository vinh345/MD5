import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  // ham cập nhật thời gian
  updateTime = () => {
    this.intervalId = setInterval(() => {
      this.runtime();
    }, 1000);
  };

  // lấy thời gian
  runtime = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  };

  //
  componentDidMount() {
    this.updateTime();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h1>Thời gian hiện tại:</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default Clock;
