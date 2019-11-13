import React from "react";
import PropTypes from "prop-types";

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timer = 0;
  }

  startTimer() {
    const {gameTime, onTimerTick} = this.props;
    if (this.timer === 0 && gameTime > 0) {
      this.timer = setInterval(onTimerTick, 1000);
    }
  }

  componentDidMount() {
    this.startTimer();
  }

  convertTime(secs) {
    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);

    const obj = {
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  render() {
    const {gameTime, onTimerExpire} = this.props;
    if (gameTime === 0) {
      clearInterval(this.timer);
      onTimerExpire();
    }

    const timeObj = this.convertTime(gameTime);

    return (
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{timeObj.m}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{timeObj.s >= 10 ? timeObj.s : `0${timeObj.s}`}</span>
      </div>
    );
  }
}

Timer.propTypes = {
  gameTime: PropTypes.number.isRequired,
  onTimerTick: PropTypes.func.isRequired,
  onTimerExpire: PropTypes.func.isRequired,
};


export default Timer;
