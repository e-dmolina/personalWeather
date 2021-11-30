import {client} from '../../api/client';
import {call, put, takeLatest} from 'redux-saga/effects';
import {GET_SELECTED_CITY_WEATHER} from '../actionTypes';
import {env} from '../../config';
import {
  errorSelectedCitiesWeather,
  responseSelectedCitiesWeather,
} from '../actions/citiesWeather.action';

export function* GetSelectedCitiesWeather({payload}: any): any {
  const {lat, lon} = payload;
  try {
    const response = yield client().get(
      `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${env.API_ID}`,
    );

    const res = response.data;

    yield put(responseSelectedCitiesWeather(res));
  } catch (error) {
    yield put(errorSelectedCitiesWeather(error));
  }
}

export default function* sucursals() {
  yield takeLatest(GET_SELECTED_CITY_WEATHER, GetSelectedCitiesWeather);
}
