// @flow
import React, { Component } from 'react';
import Card from '../../components/Card';

class GameContainer extends Component {
  state = {
    planet: null
  }

  randomizePlanetHandler = () => {
    this.setState({
      planetlanet: this.props.planets[Math.floor(Math.random() * this.state.props.length)]
    });
  }

  render() {
    return (
      <Card />
    );
  }
}

export default GameContainer;
