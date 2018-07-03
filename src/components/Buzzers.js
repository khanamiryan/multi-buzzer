import React, { Component } from 'react';
import Toggle from 'react-toggle'
import { handleBuzzer, clearData } from '../socket';
import '../stylesheets/Buzzers.css';

class Buttons extends Component {
    constructor(props) {
        super(props);

        this.state = { data: [], isConnectionOpen: false };

        this.toggleConnection = this.toggleConnection.bind(this);
    }

    toggleConnection() {
        this.setState({ isConnectionOpen: !this.state.isConnectionOpen });
        clearData();
        handleBuzzer(data => {
            if (this.state.isConnectionOpen) {
                this.setState({ data });
            }
        });
    }

    render() {
        return (
            <div>
                <Toggle defaultChecked={this.state.isConnectionOpen} onChange={this.toggleConnection} />
                <div className="buzzers">
                    <div className={!!this.state.data[0] ? `buzzer active ${this.state.data[0]}` : 'buzzer'}></div>
                    <div className={!!this.state.data[1] ? `buzzer active ${this.state.data[1]}` : 'buzzer'}></div>
                    <div className={!!this.state.data[2] ? `buzzer active ${this.state.data[2]}` : 'buzzer'}></div>
                    <div className={!!this.state.data[3] ? `buzzer active ${this.state.data[3]}` : 'buzzer'}></div>
                    <div className={!!this.state.data[4] ? `buzzer active ${this.state.data[4]}` : 'buzzer'}></div>
                </div>
            </div>
        );
    }
}

export default Buttons;