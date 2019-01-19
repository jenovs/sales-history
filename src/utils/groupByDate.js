const padZero = s => String(s).padStart(2, '0');

const parseDate = ts => {
  const digits = [
    ts.getFullYear(),
    padZero(ts.getMonth() + 1),
    padZero(ts.getDate()),
  ];

  return digits.join('/');
};

export default data => {
  const result = {};
  data.forEach(d => {
    const date = parseDate(new Date(d.timestamp));
    // eslint-disable-next-line
    result[date] ? result[date].push(d) : (result[date] = [d]);
  });
  return result;
};
