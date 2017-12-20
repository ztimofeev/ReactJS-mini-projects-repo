import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const resultReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.payload})
      }
    case actionTypes.DELETE_RESULT:
      const newArr = state.results.filter(res => res.id !== action.payload);
      return {
        ...state,
        results: newArr
      }
    }
  return state;
}

export default resultReducer;