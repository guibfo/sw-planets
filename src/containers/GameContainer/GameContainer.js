// @flow
import React, { Component } from 'react';
// import Card from '../../components/Card';

type Props = {
  fetchPlanets: () => void
}

class GameContainer extends Component<Props, State> {
  state = {
    currentPlanet: null
  }

  componentDidMount() {
    this.props.fetchPlanets('https://swapi.co/api/planets/');
  }

  // randomizePlanetHandler = () => {
  //   this.setState({
  //     currentPlanet: this.props.planets[Math.floor(Math.random() * this.state.props.length)]
  //   });
  // }

  render() {
    return (
      <div>Testing sagas</div>
    );
  }
}

export default GameContainer;
