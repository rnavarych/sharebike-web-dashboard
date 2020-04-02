import * as types from '../constants/actionTypes'

let initialState = {
  user: null
};

const auth = (state = initialState, action) => {
  switch(action.type) {
    case types.SAVE_USER: {
      return {
        ...state,
        user: action.user
      }
    }
    case  types.REMOVE_USER: {
      return {
        ...state,
        user: null
      }
    }
    default:
      return state

  }
};

export default auth;