import Axios from 'axios';
import * as Config from '../config';

export const environment = {
  baseURL: Config.env.BASE_URL,
  assetsBaseUrl: Config.env.ASSETS_BASE_URL,
  assetsBucketName: Config.env.ASSETS_BUCKET_NAME,
  baseURLSecure: Config.env.BASE_URL_SECURE,
  mockURL: Config.env.MOCK_URL,
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
