import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

import Filters from '.';

const mockFn = jest.fn();

const props = {
  filterConfig: [
    {
      name: 'card',
      label: 'Card',
      filterGroupLabel: 'Payment type',
      filterGroupName: 'paidBy',
    },
    {
      name: 'cash',
      label: 'Cash',
      filterGroupLabel: 'Payment type',
      filterGroupName: 'paidBy',
    },
    {
      name: 'successful',
      label: 'Successful',
      filterGroupLabel: 'Status',
      filterGroupName: 'status',
    },
  ],
  filterState: { card: false, cash: true, successful: true },
  updateFilter: mockFn,
};

describe('Filter', () => {
  afterEach(cleanup);

  it('should render two headers and three filter buttons', () => {
    const { getByText } = render(<Filters {...props} />);

    expect(getByText('Payment type')).toBeVisible();
    expect(getByText('Card')).toBeVisible();
    expect(getByText('Cash')).toBeVisible();
    expect(getByText('Status')).toBeVisible();
    expect(getByText('Successful')).toBeVisible();
  });

  it('should handle click on buttons', () => {
    const { getByText } = render(<Filters {...props} />);

    fireEvent.click(getByText('Card'));
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('card');

    mockFn.mockClear();

    fireEvent.click(getByText('Cash'));
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('cash');

    mockFn.mockClear();

    fireEvent.click(getByText('Successful'));
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('successful');
  });

  it('should render buttons with different state', () => {
    const tree = renderer.create(<Filters {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
