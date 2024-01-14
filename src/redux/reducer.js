// reducers/loremIpsumReducer.js
import { SET_LOREM_IPSUM } from "./actions";

const initialState = {
  title: "",
  text: "",
};

const loremIpsumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOREM_IPSUM:
      return {
        ...state,
        title: action.payload.title,
        text: action.payload.text,
      };
    default:
      return state;
  }
};

export default loremIpsumReducer;