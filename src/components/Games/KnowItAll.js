import React, { Component, Fragment } from 'react';
import { clearData, toggleConnection, hasConnection, handleBuzzer } from '../../socket';
import '../../stylesheets/KnowItAll.css';

class BeFirst extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: [ [2, 0], [2, 0] ],
      seconds: [20, 20],
      isConnectionOpen: true,
    };
    this.timer = [0, 0];
  }

  secondsToTime = (secs) => {
    let s = [Math.floor(secs / 10), secs % 10];
    return s;
  }

  componentDidMount = () => {
    clearData();
    hasConnection(hasConnection => this.setState({ isConnectionOpen: hasConnection }));
    handleBuzzer(data => {
      if (this.state.isConnectionOpen) {
        this.changeMode(data);
      }
    });
  };

  changeMode = (data) => {
    if (data.length) {
      // possible 3 colors: w: 0, g: 1, r: -1
      switch(data[0]) {
        case 'w':
          clearData();
          this.pauseTimer(0);
          this.startTimer(1);
          break;
        case 'g':
          clearData();
          this.pauseTimer(1);
          this.startTimer(0);
          break;
        case 'r':
          clearData();
          this.pauseTimer(0);
          this.pauseTimer(1);
          break;
      }
    }
  };

  startTimer = (i) => {
    if (this.timer[i] === 0) {
      this.timer[i] = setInterval(() => this.countDown(i), 1000);
    }
  }

  pauseTimer = (i) => {
    clearInterval(this.timer[i]);
    this.timer[i] = 0;
  }

  /*resetTimer = () => {
    clearInterval(this.timer[0]);
    clearInterval(this.timer[1]);
    this.timer = [0, 0];
    this.setState({
      time: [ [2, 0], [2, 0] ],
      seconds: [20, 20],
      isConnectionOpen: true
    });
    toggleConnection(true);
    clearData();
  } */

  countDown = (i) => {
    // Remove one second, set state so a re-render happens.
    let s = this.state.seconds[i] - 1;
    let time = [];
    time[i] = this.secondsToTime(s);
    time[1-i] = this.state.time[1-i];
    let seconds = [];
    seconds[i] = s;
    seconds[1-i] = this.state.seconds[1-i];
    this.setState({ time, seconds });

    // Check if we're at zero.
    if (seconds[i] === 0) {
      clearInterval(this.timer[i]);
      toggleConnection(false);
    }
  }

  render() {
    return (
      <Fragment>
        <div className="game-area">
          <div className="timer">
            <div className="flip-container">
              <div className="flip-item">
                <div className="digit">{this.state.time[0][0]}</div>
              </div>
              <div className="flip-item">
                <div className="digit">{this.state.time[0][1]}</div>
              </div>
            </div>
          </div>
          <div className="timer">
            <div className="flip-container">
              <div className="flip-item">
                <div className="digit">{this.state.time[1][0]}</div>
              </div>
              <div className="flip-item">
                <div className="digit">{this.state.time[1][1]}</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BeFirst;