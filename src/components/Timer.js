import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import timeSound from '../audio/time-sound.mp3';
import timeSoundDanger from '../audio/time-sound-2.mp3';
import '../stylesheets/Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = { time: { m: [0, 1], s: [0, 0] }, seconds: 60, timeColor: '#ffffff' };
        this.timer = 0;

        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.decreaseTime = this.decreaseTime.bind(this);
        this.increaseTime = this.increaseTime.bind(this);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));
        let h = [Math.floor(hours / 10), hours % 10];

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let m = [Math.floor(minutes / 10), minutes % 10];

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        let s = [Math.floor(seconds / 10), seconds % 10];

        let obj = {
            "h": h,
            "m": m,
            "s": s
        };
        return obj;
    }

    startTimer() {
        if (this.timer === 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    pauseTimer() {
        clearInterval(this.timer);
        this.timer = 0;
    }

    resetTimer() {
        clearInterval(this.timer);
        this.timer = 0;
        this.setState({ time: { m: [0, 1], s: [0, 0] }, seconds: 60, timeColor: '#ffffff' });
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Play Sound
        let timeSound = document.getElementById('timeSound');

        // Check if we are near to end change color
        if (seconds < 10) {
            document.getElementById('timeSoundDanger').play();
            this.setState({ timeColor: '#ff0000' });
        } else if (seconds < 25) {
            timeSound.play();
            this.setState({ timeColor: '#ff8800' });
        } else {
            timeSound.play();
            this.setState({ timeColor: '#ffffff' });
        }

        // Check if we're at zero.
        if (seconds === 0) {
            this.resetTimer();
        }
    }

    decreaseTime() {
        if (this.state.seconds > 15) {
            this.setState({
                time: this.secondsToTime(this.state.seconds - 15),
                seconds: this.state.seconds - 15
            });
        }
    }

    increaseTime() {
        this.setState({
            time: this.secondsToTime(this.state.seconds + 15),
            seconds: this.state.seconds + 15
        });
    }

    render() {
        let timeColor = {
            color: this.state.timeColor
        };

        return (
            <div className="timer">
                <div className="buttons">
                    <Button color="success" onClick={this.startTimer}>Start</Button>
                    <Button color="warning" onClick={this.pauseTimer}>Pause</Button>
                    <Button color="danger" onClick={this.resetTimer}>Reset</Button>
                </div>
                <audio id="timeSound" src={timeSound}></audio>
                <audio id="timeSoundDanger" src={timeSoundDanger}></audio>
                <div className="flip-container" style={timeColor}>
                    <div className="time-control" onClick={this.decreaseTime}>-</div>
                    <div className="flip-item">
                        <div className="digit">{this.state.time.m[0]}</div>
                    </div>
                    <div className="flip-item">
                        <div className="digit">{this.state.time.m[1]}</div>
                    </div>
                    <div className="ticker">:</div>
                    <div className="flip-item">
                        <div className="digit">{this.state.time.s[0]}</div>
                    </div>
                    <div className="flip-item">
                        <div className="digit">{this.state.time.s[1]}</div>
                    </div>
                    <div className="time-control" onClick={this.increaseTime}>+</div>
                </div>
            </div>
        );
    }
}

export default Timer;