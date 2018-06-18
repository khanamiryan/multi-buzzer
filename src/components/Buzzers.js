import React, { Component } from 'react';
import '../stylesheets/Buzzers.css';

class Buttons extends Component {
    render() {
        return (
            <div className="buzzers">
                <div className="buzzer"></div>
                <div className="buzzer"></div>
                <div className="buzzer"></div>
                <div className="buzzer"></div>
                <div className="buzzer"></div>
            </div>
        );
    }
}

export default Buttons;