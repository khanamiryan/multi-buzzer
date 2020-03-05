import React, { Component } from 'react';
import Timer from './Timer';
import Buzzers from './Buzzers';
import Ginny from './Ginny';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ginny-container"><Ginny /></div>
        {/* <header className="App-header">
          <Timer />
        </header> */}
        <Buzzers />
        <a className="made-by" href="http://me.xskytech.com" target="_blank" rel="noopener noreferrer">MADE WITH ❤️ BY NKGDEV</a>
      </div>
    );
  }
}

export default App;
