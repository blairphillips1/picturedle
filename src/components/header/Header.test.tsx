import { render } from '@testing-library/react';
import Header from './Header';

test('renders snapshot correctly', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment).toMatchSnapshot();
});
