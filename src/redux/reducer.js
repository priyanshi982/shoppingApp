//reducer

import {IS_USER_LOGIN} from './constants';

const initialState = {
  loginData: {isLogined: false},
};

export const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case IS_USER_LOGIN:
      return {...state, loginData: action?.payload};
    default:
      return state;
  }
};
