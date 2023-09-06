export const SET_LOREM_IPSUM = 'SET_LOREM_IPSUM';

export const setLoremIpsum = (data) => ({
  type: SET_LOREM_IPSUM,
  payload: data,
});

export const fetchLoremIpsum = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setLoremIpsum(data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
