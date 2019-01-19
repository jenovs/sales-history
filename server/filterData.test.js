const filterData = require('./filterData');
const { status, type } = require('./enums');

describe('server/filterData', () => {
  const data = [
    { paidBy: type.CASH, status: status.S },
    { paidBy: type.CASH, status: status.F },
    { paidBy: type.CASH, status: status.R },
    { paidBy: type.CARD, status: status.S },
    { paidBy: type.CARD, status: status.F },
    { paidBy: type.CARD, status: status.R },
  ];

  it('should return all transactions if no filter provided', () => {
    const filter = {};

    const filteredData = filterData(data, filter);

    expect(filteredData.length).toBe(6);
    expect(filteredData).toEqual(data);
  });

  it('should return all transactions if not matching filter provided', () => {
    const filter = { foo: ['bar'] };

    const filteredData = filterData(data, filter);

    expect(filteredData.length).toBe(6);
    expect(filteredData).toEqual(data);
  });

  it('should return transactions paid by card', () => {
    const filter = { paidBy: [type.CARD] };

    const filteredData = filterData(data, filter);

    expect(filteredData.length).toBe(3);
    expect(filteredData[0].paidBy).toBe(type.CARD);
    expect(filteredData[1].paidBy).toBe(type.CARD);
    expect(filteredData[2].paidBy).toBe(type.CARD);
  });

  it('should return successful transactions', () => {
    const filter = { status: [status.S] };

    const filteredData = filterData(data, filter);

    expect(filteredData.length).toBe(2);
    expect(filteredData[0].status).toBe(status.S);
    expect(filteredData[1].status).toBe(status.S);
  });

  it('should return failed transactions', () => {
    const filter = { status: [status.F] };

    const filteredData = filterData(data, filter);

    expect(filteredData.length).toBe(2);
    expect(filteredData[0].status).toBe(status.F);
    expect(filteredData[1].status).toBe(status.F);
  });

  it('should return successful transactions paid by card', () => {
    const filter = { paidBy: [type.CARD], status: [status.S] };

    const filteredData = filterData(data, filter);

    expect(filteredData.length).toBe(1);
    expect(filteredData[0].status).toBe(status.S);
    expect(filteredData[0].paidBy).toBe(type.CARD);
  });

  it('should return successful transactions paid by card and cash', () => {
    const filter = { paidBy: [type.CARD, type.CASH], status: [status.S] };

    const filteredData = filterData(data, filter);

    expect(filteredData.length).toBe(2);
    expect(filteredData[0].status).toBe(status.S);
    expect(filteredData[0].paidBy).toBe(type.CASH);
    expect(filteredData[1].status).toBe(status.S);
    expect(filteredData[1].paidBy).toBe(type.CARD);
  });

  it('should return failed and refunded transactions', () => {
    const filter = { status: [status.F, status.R] };

    const filteredData = filterData(data, filter);

    expect(filteredData.length).toBe(4);
    expect(filteredData[0].status).toBe(status.F);
    expect(filteredData[0].paidBy).toBe(type.CASH);
    expect(filteredData[1].status).toBe(status.R);
    expect(filteredData[1].paidBy).toBe(type.CASH);
    expect(filteredData[2].status).toBe(status.F);
    expect(filteredData[2].paidBy).toBe(type.CARD);
    expect(filteredData[3].status).toBe(status.R);
    expect(filteredData[3].paidBy).toBe(type.CARD);
  });

  it('should return failed and refunded transactions and ignore invalid filter', () => {
    const filter = { status: [status.F, status.R], foo: ['bar'] };

    const filteredData = filterData(data, filter);

    expect(filteredData.length).toBe(4);
    expect(filteredData[0].status).toBe(status.F);
    expect(filteredData[0].paidBy).toBe(type.CASH);
    expect(filteredData[1].status).toBe(status.R);
    expect(filteredData[1].paidBy).toBe(type.CASH);
    expect(filteredData[2].status).toBe(status.F);
    expect(filteredData[2].paidBy).toBe(type.CARD);
    expect(filteredData[3].status).toBe(status.R);
    expect(filteredData[3].paidBy).toBe(type.CARD);
  });

  it('should return failed and refunded transactions paid by card', () => {
    const filter = { status: [status.F, status.R], paidBy: [type.CARD] };

    const filteredData = filterData(data, filter);

    expect(filteredData.length).toBe(2);
    expect(filteredData[0].status).toBe(status.F);
    expect(filteredData[0].paidBy).toBe(type.CARD);
    expect(filteredData[1].status).toBe(status.R);
    expect(filteredData[1].paidBy).toBe(type.CARD);
  });
});
