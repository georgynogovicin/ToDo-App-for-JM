import React, { Component } from 'react';

import './task-timer.css';

export default class TaskTimer extends Component {
  state = {
    timer: 0,
    timerStatus: false,
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  timer() {
    this.setState(({ timer }) => {
      return {
        timer: timer + 1,
      };
    });
  }

  timerOn() {
    const { timerStatus } = this.state;

    if (!timerStatus) {
      this.timerID = setInterval(() => this.timer(), 1000);
      this.setState({
        timerStatus: true,
      });
    }
  }

  timerOff() {
    clearInterval(this.timerID);
    this.setState({
      timerStatus: false,
    });
  }

  render() {
    const { timer } = this.state;
    return (
      <span className="description">
        <button type="button" className="icon icon-play" aria-label="play" onClick={() => this.timerOn()} />
        <button type="button" className="icon icon-pause" aria-label="pause" onClick={() => this.timerOff()} />
        <span className="timer">{`${Math.trunc((timer / 60 / 60) % 60)}:${Math.trunc((timer / 60) % 60)}:${
          timer % 60
        }`}</span>
      </span>
    );
  }
}
