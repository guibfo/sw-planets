// @flow
import { combineReducers } from 'redux';
import * as types from '../actionTypes';

function planets(state = [], action: {type: string} = {}) {
  switch (action.type) {
    case types.GET_PLANETS_SUCCESS:
      return {...state, list: action.response};
    default:
      return state;
  }
}

export default combineReducers({
  planets
});
