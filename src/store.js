// src/store.js

import { createStore } from 'redux';

const initialState = {
  myState: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MY_STATE':
      return {
        ...state,
        myState: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
