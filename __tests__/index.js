import React from 'react';
import {render} from '@testing-library/react';
import {Tabs} from '..';

describe('test', () => {
  test('basic', () => {
    const result = render(<Tabs/>);
    expect(result.container).toMatchSnapshot();
  });
});

