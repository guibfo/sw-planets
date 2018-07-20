import React, { Component } from 'react';
import axios from 'axios';

import PlanetCard from '../../components/PlanetCard/PlanetCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/Auxiliary';
import styles from './GameContainer.scss';

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
        <Aux>
          <PlanetCard planet={this.state.randomPlanet} />
          <Button click={this.randomizePlanetHandler}/>
        </Aux>
      );
    }

    return (
      <div className={styles['card-wrapper']}>
        {singlePlanet}
      </div>
    );
  }
}

export default GameContainer;
