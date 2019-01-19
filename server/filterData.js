module.exports = (data = [], filter = {}) => {
  const filterKeys = Object.keys(filter);

  return data.filter(d => {
    return Object.keys(d).every(key => {
      if (filterKeys.includes(key)) {
        return filter[key].includes(d[key]);
      }
      return true;
    });
  });
};
