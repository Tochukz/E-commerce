import Commerce from '@chec/commerce.js';
import config from '../config/default';

const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-09-29',
    },
  },
};

const isDevelopmentEnv = config.ENV == 'development';
export default new Commerce(
  config.CHEC_PUBLIC_KEY,
  isDevelopmentEnv,
  commerceConfig,
);