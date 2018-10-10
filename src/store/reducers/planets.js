// @flow
import { combineReducers } from 'redux';
import * as types from '../actionTypes';

function isFetching (state = false, action: { type: string } = {}) {
  switch (action.type) {
    case types.GET_PLANETS_REQUEST:
      return true;
    case types.GET_PLANETS_SUCCESS:
    case types.GET_PLANETS_FAILURE:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  isFetching
});
