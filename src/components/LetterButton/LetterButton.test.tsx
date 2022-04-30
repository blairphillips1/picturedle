import { render, screen, fireEvent } from '@testing-library/react';
import LetterButton from './LetterButton';

const props = {
    handleLetterInput: jest.fn(),
    letter: 'A',
  }
test('renders snapshot correctly', () => {
  const { asFragment } = render(<LetterButton {...props} />);
  expect(asFragment).toMatchSnapshot();
});

test('should call handleLetterInput when button is clicked', async () => {
  render(<LetterButton {...props} />);
  const button = await screen.findByText('A');
  fireEvent.click(button);
  expect(props.handleLetterInput).toHaveBeenCalledWith('A');
});