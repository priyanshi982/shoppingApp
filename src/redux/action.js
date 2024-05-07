//All Action Function

import {IS_USER_LOGIN} from './constants';

export const isUserLogin = data => {
  return {type: IS_USER_LOGIN, payload: {data}};
};
