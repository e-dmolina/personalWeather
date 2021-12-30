import Axios from 'axios';
import * as Config from '../config';

export const environment = {
  baseURL: Config.env.BASE_URL,
};

export const client = (baseURL = Config.env.BASE_URL) =>
  Axios.create({
    baseURL,
    timeout: 60000,
    headers: {
      'Cache-Control': 'no-cache',
      'X-App-Name': 'PersonalWeatherAppMobil',
      'X-App-Version': 'v1.0.0',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
