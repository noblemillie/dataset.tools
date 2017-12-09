// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import addToken from './homepage';
import tokenReducer from './homepage';

const rootReducer = combineReducers({
  counter,
  router,
  //addToken
  token: tokenReducer
});

export default rootReducer;
