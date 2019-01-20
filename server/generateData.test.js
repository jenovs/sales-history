const { generateData, getRandomNum } = require('./genereateData');
const enums = require('./enums');

describe('server/generateData', () => {
  const rePaymenType = RegExp(`${enums.type.CARD}|${enums.type.CASH}`);
  const reStatus = RegExp(
    `${enums.status.S}|${enums.status.F}|${enums.status.R}`
  );
  const dateToday = new Date('2019-01-17').getTime();

  it('should generate random numbers', () => {
    expect(getRandomNum(0, 1, 0.0001)).toBe(0);
    expect(getRandomNum(0, 1, 0.9999)).toBe(1);
    expect(getRandomNum(2, 7, 0.0001)).toBe(2);
    expect(getRandomNum(2, 7, 0.9999)).toBe(7);
  });

  it('should generate one transaction for each day', () => {
    const data = generateData({
      dateToday,
      getRandomNum: () => 1,
    });
    expect(data.length).toBe(180);

    const { amount, currency, timestamp, paidBy, status } = data[
      getRandomNum(0, 179)
    ];

    expect(Number(amount)).not.toBeNaN();
    expect(currency).toBe(enums.currency.EUR);
    expect(Number(timestamp)).not.toBeNaN();
    expect(paidBy).toMatch(rePaymenType);
    expect(status).toMatch(reStatus);
  });

  it('should generate two transactions for each day sorted desc', () => {
    const data = generateData({
      dateToday,
      getRandomNum: () => 2,
    });
    expect(data.length).toBe(360);

    const rnd = getRandomNum(0, 359);
    const { amount, currency, timestamp, paidBy, status } = data[rnd];

    expect(Number(amount)).not.toBeNaN();
    expect(currency).toBe(enums.currency.EUR);
    expect(Number(timestamp)).not.toBeNaN();
    expect(paidBy).toMatch(rePaymenType);
    expect(status).toMatch(reStatus);

    expect(timestamp).toBeGreaterThanOrEqual(data[rnd + 1].timestamp);
  });
});
