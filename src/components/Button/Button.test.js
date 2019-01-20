import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

import Button from '.';

describe('Button', () => {
  afterEach(cleanup);

  const mockClick = jest.fn();

  const props = {
    onClick: () => {},
  };

  it('should render a button with a label', () => {
    const { getByText } = render(<Button {...props}>Foo</Button>);

    expect(getByText('Foo')).toBeVisible();
  });

  it('should register a click', () => {
    const { getByText } = render(
      <Button {...props} onClick={mockClick}>
        Foo
      </Button>
    );

    fireEvent.click(getByText('Foo'));
    expect(mockClick).toHaveBeenCalled();
  });

  it('should render a dark button', () => {
    const tree = renderer.create(<Button {...props}>Foo</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render a light button', () => {
    const tree = renderer
      .create(
        <Button {...props} inactive>
          Foo
        </Button>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
