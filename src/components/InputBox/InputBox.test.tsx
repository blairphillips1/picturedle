import { render } from '@testing-library/react';
import InputBox from './InputBox';

test('renders snapshot correctly', () => {
  const { asFragment } = render(<InputBox input='Test' />);
  expect(asFragment).toMatchSnapshot();
});
