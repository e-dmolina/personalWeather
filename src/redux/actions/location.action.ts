import {
  ERROR_MY_LOCATION,
  GET_MY_LOCATION,
  RESPONSE_MY_LOCATION,
} from '../actionTypes';

export const getMyLocation = () => ({
  type: GET_MY_LOCATION,
});

export const responseMyLocation = (payload: any) => ({
  type: RESPONSE_MY_LOCATION,
  payload,
});

export const errorMyLocation = (payload: any) => ({
  type: ERROR_MY_LOCATION,
  payload,
});
