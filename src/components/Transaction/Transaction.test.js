import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

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
    const { getByRole, getByText, getByTitle } = render(
      <Transaction {...props} />
    );

    expect(getByText('1:01')).toBeVisible();
    expect(getByText('1.23')).toBeVisible();
    expect(getByText(/successful/i)).toBeVisible();
    expect(getByRole('img')).toBeVisible();
  });

  it('should render a failed transaction', () => {
    const { getByRole, getByText, getByTitle } = render(
      <Transaction {...props} status="failed" />
    );

    expect(getByText('1:01')).toBeVisible();
    expect(getByText('1.23')).toBeVisible();
    expect(getByText(/failed/i)).toBeVisible();
    expect(getByRole('img')).toBeVisible();
  });

  it('should render a refunded transaction', () => {
    const { getByRole, getByText, getByTitle } = render(
      <Transaction {...props} status="refunded" />
    );

    expect(getByText('1:01')).toBeVisible();
    expect(getByText('-1.23')).toBeVisible();
    expect(getByText(/refunded/i)).toBeVisible();
    expect(getByRole('img')).toBeVisible();
  });
});
