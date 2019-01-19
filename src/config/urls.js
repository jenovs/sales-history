const production = process.env.NODE_ENV === 'production';

// eslint-disable-next-line
export const BASE_URL = production
  ? 'https://yy2d3kf4y4.execute-api.us-east-1.amazonaws.com/dev/sales'
  : 'http://localhost:3001/sales';
