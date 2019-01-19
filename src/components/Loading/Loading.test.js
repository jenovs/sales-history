import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Loading from '.';

jest.useFakeTimers();

describe('Loading', () => {
  afterEach(cleanup);
  afterEach(jest.clearAllTimers);

  it('should render dots', () => {
    const timeout = 175;

    const { getByText, queryByText } = render(<Loading timeout={timeout} />);

    expect(queryByText('•')).toBeNull();
    jest.advanceTimersByTime(timeout);
    expect(getByText('•')).toBeVisible();
    jest.advanceTimersByTime(timeout);
    expect(getByText('••')).toBeVisible();
    jest.advanceTimersByTime(timeout);
    expect(getByText('•••')).toBeVisible();
    jest.advanceTimersByTime(timeout);
    expect(getByText('•')).toBeVisible();
  });
});
