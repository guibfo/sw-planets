// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GameContainer from './GameContainer';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const GameContainerWithRedux: typeof GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);

export default GameContainerWithRedux;
