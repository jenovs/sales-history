function random(min = 0, max = 1, rnd = Math.random()) {
  return Math.floor(rnd * (max - min + 1) + min);
}

const { currency, status, type } = require('./enums');

function generateData({
  dateToday = new Date().getTime(),
  daysAgo = 180,
  getRandomNum = random,
} = {}) {
  const DAY_MS = 86400 * 1000;

  const nDaysAgo = dateToday - daysAgo * DAY_MS;

  const sales = [];

  let id = 0;

  for (let date = dateToday - DAY_MS; date >= nDaysAgo; date -= DAY_MS) {
    const salesToday = getRandomNum(3, 8);

    for (let j = 0; j < salesToday; j++) {
      const amount = getRandomNum(50, 15000);
      const paidBy = Math.random() > 0.33 ? type.CARD : type.CASH;
      const rnd = Math.random();
      // eslint-disable-next-line
      let transStatus = rnd > 0.3 ? status.S : rnd > 0.15 ? status.F : status.R;
      if (paidBy === type.CASH && transStatus === status.F) {
        transStatus = status.R;
      }

      const hours = new Date(date).getHours();
      const min = (hours - 8) * 3600;
      const max = (hours - 18) * 3600;

      const sale = {
        id: id++,
        amount,
        currency: currency.EUR,
        timestamp: date - getRandomNum(min, max) * 1000,
        paidBy,
        status: transStatus,
      };

      sales.push(sale);
    }
  }

  return sales.sort((a, b) => b.timestamp - a.timestamp);
}

module.exports = {
  generateData,
  getRandomNum: random,
};
