// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import addToken from './homepage';
import tokenReducer from './homepage';
import mainViewReducer from './Mainpage';
import addUserDataReducer from './MainPage2';

const rootReducer = combineReducers({
  counter,
  router,
  mainView: mainViewReducer,
  token: tokenReducer,
  userData: addUserDataReducer
});

export default rootReducer;
