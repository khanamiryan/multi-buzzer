import React, { Component } from 'react';
import Timer from './Timer';
import Buzzers from './Buzzers';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Timer />
        </header>
        <Buzzers />
      </div>
    );
  }
}

export default App;
