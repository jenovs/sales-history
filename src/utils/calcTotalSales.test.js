import calcTotalSales from './calcTotalSales';

const data = [
  { status: 'failed', amount: 123 },
  { status: 'refunded', amount: 456 },
  { status: 'successful', amount: 789 },
  { status: 'failed', amount: 234 },
  { status: 'successful', amount: 567 },
  { status: 'refunded', amount: 89 },
];

describe('utils/calcTotalSales', () => {
  it('should calculate positive total', () => {
    expect(calcTotalSales(data)).toBe('8.11');
  });

  it('should calculate negative total', () => {
    data.push({ status: 'refunded', amount: 1000 });
    expect(calcTotalSales(data)).toBe('-1.89');
  });
});
