import { combineReducers } from 'redux';
import { ASYNC_START, SET_CURRENT_USER, LOGOUT_USER, FETCH_USER_INFO } from './actions/types';

const defaultState = { profile: {}, loading: false}
const initialState = { currentUser: {} };

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      console.log('in auth reducer', action)
      const { id, email } = action.user;
      return {...state, currentUser: { id, email }}
    case LOGOUT_USER:
      return {...state, currentUser: {} }
    default:
      return state;
  }
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ASYNC_START:
      return {...state, profile: {}, loading: true}
    case FETCH_USER_INFO:
      // console.log(action)
      // console.log(state)
      return {
        ...state,
        profile: {
          email: action.user.email, 
          name: action.user.name, 
          phone_number: action.user.phone_number
        },
        loading: false
      };
    default:
      return state
  }
}

const goalsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return [...action.user.goals]
  default:
    return state
  }
}

const thoughtsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_USER_INFO:
      return [...action.user.thought_entries]
    default:
      return state
  }
}

const updatesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_INFO:
      return [...action.user.daily_updates]
    default:
      return state
  }
}


const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  goals: goalsReducer,
  thoughts: thoughtsReducer,
  updates: updatesReducer
});

export default rootReducer;