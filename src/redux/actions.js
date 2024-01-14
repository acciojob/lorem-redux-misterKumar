import loremIpsumGenerator from "../components/loremIpsumGenerator";

export const SET_LOREM_IPSUM = "SET_LOREM_IPSUM";

export const setLoremIpsum = () => {
  const { title, text } = loremIpsumGenerator(); 
  return {
    type: SET_LOREM_IPSUM,
    payload: { title, text },
  };
};