import InitialState from "./initialState"

const Reducers = (state=InitialState,action) =>{

  switch (action.type) {
    case 'UPDATE':
  return action.post
 
  
    default:
    return state
  }
}


export default Reducers;