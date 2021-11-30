import {all} from 'redux-saga/effects';
import CitiesWeather from './citiesWeather.saga';

export default function* rootSaga() {
  yield all([CitiesWeather()]);
}
