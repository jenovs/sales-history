import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Button from '.';

describe('Button', () => {
  afterEach(cleanup);

  const props = {
    amount: 123,
    paidBy: 'card',
    status: 'successful',
    timestamp: 1547766061000,
  };

  it('should render a successful transaction', () => {
    // todo
  });
});
