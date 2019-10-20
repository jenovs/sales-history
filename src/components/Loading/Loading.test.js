import React from 'react';
import { act, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Loading from '.';

jest.useFakeTimers();

describe.only('Loading', () => {
  afterEach(cleanup);
  afterEach(jest.clearAllTimers);

  it('should render dots', () => {
    const timeout = 175;

    const { getByText, queryByText } = render(<Loading timeout={timeout} />);

    expect(queryByText('•')).toBeNull();
    act(() => jest.advanceTimersByTime(timeout));
    expect(getByText('•')).toBeVisible();
    act(() => jest.advanceTimersByTime(timeout));
    expect(getByText('••')).toBeVisible();
    act(() => jest.advanceTimersByTime(timeout));
    expect(getByText('•••')).toBeVisible();
    act(() => jest.advanceTimersByTime(timeout));
    expect(getByText('•')).toBeVisible();
  });
});
