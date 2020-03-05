import React, { Component } from 'react';
import { clearData } from '../socket';
import '../stylesheets/Buzzers.css';

import openSocket  from 'socket.io-client';
const socket = openSocket('http://api.zz.xskytech.com');

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], isConnectionOpen: true };
    }

    componentDidMount() {
        clearData();
        socket.on('touchSignal', (data) => {
            this.setState({ data });
        });
    }

    render() {
        return (
            <div className="buzzers">
                <div className={!!this.state.data[0] ? `buzzer active ${this.state.data[0]}` : 'buzzer'} style={{ backgroundColor: this.state.data[0] }}></div>
                <div className={!!this.state.data[1] ? `buzzer active ${this.state.data[1]}` : 'buzzer'} style={{ backgroundColor: this.state.data[1] }}></div>
                <div className={!!this.state.data[2] ? `buzzer active ${this.state.data[2]}` : 'buzzer'} style={{ backgroundColor: this.state.data[2] }}></div>
                <div className={!!this.state.data[3] ? `buzzer active ${this.state.data[3]}` : 'buzzer'} style={{ backgroundColor: this.state.data[3] }}></div>
                <div className={!!this.state.data[4] ? `buzzer active ${this.state.data[4]}` : 'buzzer'} style={{ backgroundColor: this.state.data[4] }}></div>
                <div className={!!this.state.data[5] ? `buzzer active ${this.state.data[5]}` : 'buzzer'} style={{ backgroundColor: this.state.data[5] }}></div>
            </div>
        );
    }
}

export default Buttons;