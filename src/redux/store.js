import { createStore, combineReducers } from "redux";
import loremIpsumReducer from "./reducer";

const rootReducer = combineReducers({
  loremIpsum: loremIpsumReducer,
});

const store = createStore(rootReducer);

export default store;