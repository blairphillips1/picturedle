import { render } from '@testing-library/react';
import Keyboard from './Keyboard';

const props = {
    handleLetterInput: jest.fn(),
    handleDeleteInput: jest.fn(),
    handleSpaceInput: jest.fn(),
    handleEnterInput: jest.fn()
  }
test('renders snapshot correctly', () => {
  const { asFragment } = render(<Keyboard {...props} />);
  expect(asFragment).toMatchSnapshot();
});