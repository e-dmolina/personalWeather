import {combineReducers} from 'redux';

// Imports: Reducers
import citiesWeatherReducer from './citiesWeather.reducer';
// import {CLEAR_STATE} from '../actionTypes';

// Redux: Root Reducer
const appReducer = combineReducers({
  citiesWeather: citiesWeatherReducer,
});

const rootReducer = (state: any, action: any) => {
  //   if (action.type === CLEAR_STATE) {
  //     state = undefined;
  //   }

  return appReducer(state, action);
};

export default rootReducer;
