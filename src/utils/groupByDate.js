import { parseDate } from '.';

export default data => {
  const result = {};
  data.forEach(d => {
    const date = parseDate(new Date(d.timestamp));
    // eslint-disable-next-line
    result[date] ? result[date].push(d) : (result[date] = [d]);
  });
  return result;
};
