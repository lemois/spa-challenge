import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }), applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  );
};
