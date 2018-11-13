import React, { Component } from 'react';
import { Button } from 'reactstrap';
import GameModes from '../constants/GameModes';
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gameMode: -1 };
  }

  handleChange = (e) => {
    this.setState({
      gameMode: e.target.dataset.id
    });
  };

  render() {
    return (
      <div className="App">
        {GameModes[this.state.gameMode] || (
          <div style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
            }}>
            <Button data-id="0" onClick={this.handleChange}>Be First</Button>
            <Button data-id="1" onClick={this.handleChange}>Know It All</Button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
