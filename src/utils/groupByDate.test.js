import { groupByDate } from '.';

const data = [
  { timestamp: 1544869890000, value: 'a' },
  { timestamp: 1544869890111, value: 'b' },
  { timestamp: 1544869890222, value: 'c' },
  { timestamp: 1545886890000, value: 'd' },
  { timestamp: 1545886890111, value: 'e' },
  { timestamp: 1545886890222, value: 'f' },
  { timestamp: 1505886890000, value: 'g' },
];

const result = {
  '2018/12/15': [
    { timestamp: 1544869890000, value: 'a' },
    { timestamp: 1544869890111, value: 'b' },
    { timestamp: 1544869890222, value: 'c' },
  ],
  '2018/12/27': [
    { timestamp: 1545886890000, value: 'd' },
    { timestamp: 1545886890111, value: 'e' },
    { timestamp: 1545886890222, value: 'f' },
  ],
  '2017/09/20': [{ timestamp: 1505886890000, value: 'g' }],
};

describe('utils/groupByDate', () => {
  it('should group by date', () => {
    expect(groupByDate(data)).toEqual(result);
  });
});
