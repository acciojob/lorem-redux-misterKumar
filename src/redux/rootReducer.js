import { combineReducers } from 'redux';
import loremIpsumReducer from './reducer';

const rootReducer = combineReducers({
  loremIpsum: loremIpsumReducer,
});

export default rootReducer;
