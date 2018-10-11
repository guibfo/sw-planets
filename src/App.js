import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import GameContainer from './containers/GameContainer';
// import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <Provider {...{store}}>
        <div className="app-wrapper">
          <GameContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
