// @flow
import React, { Component, Fragment } from 'react';
import axios from 'axios';

import GameContainer from './styled';
import PlanetCard from '../../components/PlanetCard';
import Loader from '../../components/UI/Loader';
import Button from '../../components/UI/Button';

class GameContainer extends Component {
  state = {
    planets: null,
    randomPlanet: null,
    loading: false,
    error: false
  }

  getAllPlanets = (url) => {
    axios.get(url)
      .then(response => {
        if(!this.state.planets) {
          this.setState({planets: response.data.results});
        }
        else {
          response.data.results.map(planet => {
            return this.setState({planets: [...this.state.planets, planet]});
          });
        }

        if(response.data.next) {
          this.getAllPlanets(response.data.next);
        }
        else {
          this.randomizePlanetHandler();
          this.setState({loading: false});
        }
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  randomizePlanetHandler = () => {
    this.setState({randomPlanet: this.state.planets[Math.floor(Math.random() * this.state.planets.length)]});
  }

  componentWillMount() {
    this.getAllPlanets('https://swapi.co/api/planets/');
    this.setState({loading: true});
  }

  render() {
    let singlePlanet = null;

    if(this.state.loading) {
      singlePlanet = <Spinner />
    }
    else {
      singlePlanet = (
        <Fragment>
          <PlanetCard planet={this.state.randomPlanet} />
          <Button click={this.randomizePlanetHandler}/>
        </Fragment>
      );
    }

    if(this.state.error) {
      singlePlanet = 'Something wrong happened :(';
    }

    return (
      <GameContainer>
        {singlePlanet}
      </GameContainer>
    );
  }
}

export default GameContainer;
