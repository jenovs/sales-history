import axios from 'axios';

const production = process.env.NODE_ENV === 'production';

const baseURL = production
  ? 'https://8mmh925wuk.execute-api.eu-central-1.amazonaws.com/dev/sales'
  : 'http://localhost:3001/sales';

export default axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});
