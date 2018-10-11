import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const saga = createSagaMiddleware();

const middlewares = [
  saga
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger({
    level: 'info',
    collapsed: false,
    logger: console,
    predicate: () => true
  }));
}

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

saga.run(watcherSaga);

export default store;
