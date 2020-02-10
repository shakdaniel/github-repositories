import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

test('renders hello world text', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
