import React, { Component } from 'react';

import GameContainer from './containers/GameContainer/GameContainer';
// import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <GameContainer />
      </div>
    );
  }
}

export default App;
