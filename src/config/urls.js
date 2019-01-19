const production = process.env.NODE_ENV === 'production';

// eslint-disable-next-line
export const BASE_URL = production
  ? 'https://8mmh925wuk.execute-api.eu-central-1.amazonaws.com/dev'
  : 'http://localhost:3001/sales';
