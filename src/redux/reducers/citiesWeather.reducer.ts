import {
  ERROR_CITIES_WEATHER,
  ERROR_SELECTED_CITY_WEATHER,
  GET_CITIES_WEATHER,
  GET_SELECTED_CITY_WEATHER,
  RESPONSE_CITIES_WEATHER,
  RESPONSE_SELECTED_CITY_WEATHER,
} from '../actionTypes';

const initialState = {
  isloading: false,
  weatherInfo: null,
  msgError: null,
};

export default (state = initialState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case GET_SELECTED_CITY_WEATHER:
      return {...state, isloading: true};
    case RESPONSE_SELECTED_CITY_WEATHER:
      return {...state, isloading: false, weatherInfo: action.payload};
    case ERROR_SELECTED_CITY_WEATHER:
      return {...state, isloading: false, msgError: action.payload};
    default:
      return {...state};
  }
};
