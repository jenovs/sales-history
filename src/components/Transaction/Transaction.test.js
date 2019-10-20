import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Transaction from '.';

describe('Transaction', () => {
  afterEach(cleanup);

  const props = {
    amount: 123,
    paidBy: 'card',
    status: 'successful',
    timestamp: 1547766061000,
  };

  it('should render a successful transaction', () => {
    const { getByRole, getByText } = render(<Transaction {...props} />);

    expect(getByText('23:01')).toBeVisible();
    expect(getByText('1.23')).toBeVisible();
    expect(getByText(/successful/i)).toBeVisible();
    expect(getByRole('img')).toBeVisible();
  });

  it('should render a failed transaction', () => {
    const { getByRole, getByText } = render(
      <Transaction {...props} status="failed" />
    );

    expect(getByText('23:01')).toBeVisible();
    expect(getByText('1.23')).toBeVisible();
    expect(getByText(/failed/i)).toBeVisible();
    expect(getByRole('img')).toBeVisible();
  });

  it('should render a refunded transaction', () => {
    const { getByRole, getByText } = render(
      <Transaction {...props} status="refunded" />
    );

    expect(getByText('23:01')).toBeVisible();
    expect(getByText('-1.23')).toBeVisible();
    expect(getByText(/refunded/i)).toBeVisible();
    expect(getByRole('img')).toBeVisible();
  });
});
