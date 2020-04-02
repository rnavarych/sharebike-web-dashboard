import * as types from '../constants/actionTypes'

export const logIn = (user) => {
  return {
    type: types.SAVE_USER,
    user
  }
};

export const logOut = () => {
  return {
    type: types.REMOVE_USER
  }
}