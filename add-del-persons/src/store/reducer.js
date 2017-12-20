const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_PERSON') {
    const newPerson = { 
      id: Math.random(), 
      name: action.personData.name, 
      age: action.personData.age
    };
    return {
      ...state,
      persons: state.persons.concat(newPerson)
    }
  }
  if (action.type === 'DELETE_PERSON') {
    const newArray = state.persons.filter( person => person.id !== action.payload )
    return {
      ...state,
      persons: newArray
    }
  }
  return state;
}

export default reducer;