import React, { Component } from 'react';
 // import { handleBuzzer, clearData, hasConnection } from '../socket';
import '../stylesheets/Buzzers.css';
const sse=  new EventSource("http://buzzer_game.local/events"); //guce esi arandzin component darna




class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], isConnectionOpen: true };


    }

    componentDidMount() {
        sse.addEventListener("state",  e =>{

            var obj = JSON.parse(e.data);
            if(obj.id==="switch-button-r"&&obj.value===true){
                this.setState({data:this.state.data.concat('r')});
            }else if(obj.id==="switch-button-b"&&obj.value===true){
                this.setState({data:this.state.data.concat('b')});
            }
        }, true);
        // clearData();
        // hasConnection(hasConnection => this.setState({ isConnectionOpen: hasConnection }));
        // handleBuzzer(data => {
        //     if (this.state.isConnectionOpen) {
        //         this.setState({ data });
        //     }
        // });
    }

    render() {
        return (
            <div className="buzzers">
                <div className={!!this.state.data[0] ? `buzzer active ${this.state.data[0]}` : 'buzzer'}></div>
                <div className={!!this.state.data[1] ? `buzzer active ${this.state.data[1]}` : 'buzzer'}></div>
                <div className={!!this.state.data[2] ? `buzzer active ${this.state.data[2]}` : 'buzzer'}></div>
                <div className={!!this.state.data[3] ? `buzzer active ${this.state.data[3]}` : 'buzzer'}></div>
                <div className={!!this.state.data[4] ? `buzzer active ${this.state.data[4]}` : 'buzzer'}></div>
                <div className={!!this.state.data[5] ? `buzzer active ${this.state.data[5]}` : 'buzzer'}></div>
            </div>
        );
    }
}

export default Buttons;