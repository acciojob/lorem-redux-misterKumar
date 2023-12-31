
import { SET_LOREM_IPSUM } from './actions';

const initialState = {
  loremIpsum: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOREM_IPSUM:
      return {
        ...state,
        loremIpsum: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;



