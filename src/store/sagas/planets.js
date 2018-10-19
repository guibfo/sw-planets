// @flow
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * watcherSaga() {
  yield takeLatest('GET_PLANETS_REQUEST', workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function * workerSaga() {
  try {
    const response = yield call(fetchPlanets, 'https://swapi.co/api/planets/');

    yield put({type: 'GET_PLANETS_SUCCESS', response});
  } catch (error) {
    yield put({type: 'GET_PLANETS_FAILURE', error});
  }
}

function fetchPlanets(url, planets = []) {
  axios.get(url)
    .then(response => {
      response.data.results.map(planet => {
        return planets.push(planet);
      });

      if (response.data.next) {
        fetchPlanets(response.data.next, planets);
      } else {
        return planets;
      }
    })
    .catch(error => {
      return error;
    });
}
