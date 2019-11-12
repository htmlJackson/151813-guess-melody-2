import React from "react";
import PropTypes from "prop-types";

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      time: {},
      //seconds: gameTime
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    const {gameTime} = this.props;
    let timeLeftVar = this.secondsToTime(gameTime);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  startTimer() {
    const {gameTime} = this.props;
    if (this.timer == 0 && gameTime > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let {gameTime, onTimerTick} = this.props;
    let seconds = gameTime - 1;
    this.setState({
      time: this.secondsToTime(seconds)
    });
    onTimerTick();

    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  renderSeconds() {
    if (this.state.time.s === 0) return `${this.state.time.s}0`;
    if (this.state.time.s < 10) return `0${this.state.time.s}`;

    return this.state.time.s;
  }

  render() {
    return (
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{this.state.time.m}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{this.renderSeconds()}</span>
      </div>
    );
  }
}

export default Timer;
