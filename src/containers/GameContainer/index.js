// @flow
import { connect } from 'react-redux';
import GameContainer from './GameContainer';

// Functions from reducers
const mapStateToProps = state => ({
  isFetching: state.isFetching,
  planets: state.planets
});

// Functions from sagas
const mapDispatchToProps = dispatch => {
  return {
    fetchPlanets: () => dispatch({type: 'GET_PLANETS_REQUEST'})
  };
};

const GameContainerWithRedux: typeof GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);

export default GameContainerWithRedux;
