import {
  ERROR_SELECTED_CITY_WEATHER,
  GET_SELECTED_CITY_WEATHER,
  RESPONSE_SELECTED_CITY_WEATHER,
} from '../actionTypes';

export const getSelectedCitiesWeather = (payload: any) => ({
  type: GET_SELECTED_CITY_WEATHER,
  payload,
});

export const responseSelectedCitiesWeather = (payload: any) => ({
  type: RESPONSE_SELECTED_CITY_WEATHER,
  payload,
});

export const errorSelectedCitiesWeather = (payload: any) => ({
  type: ERROR_SELECTED_CITY_WEATHER,
  payload,
});
