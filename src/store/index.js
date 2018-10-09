import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const middlewares = [];

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

export * from './actions';
export default store;
