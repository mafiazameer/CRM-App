import { createStore } from 'redux';

// Define your initial state
const initialState = {
  userToken: null,
  name: ''
};

// Define your reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_TOKEN':
      return {
        ...state,
        userToken: action.payload
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};

// Define your actions
export const setUserToken = (token) => ({
  type: 'SET_USER_TOKEN',
  payload: token
});

export const setName = (name) => ({
  type: 'SET_NAME',
  payload: name
});

// Create your store
const store = createStore(rootReducer);

export default store;
