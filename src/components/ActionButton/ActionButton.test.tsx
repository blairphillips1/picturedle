import { render, screen, fireEvent } from '@testing-library/react';
import ActionButton from './ActionButton';

const props = {
  label: 'Test Label',
  handleDeleteInput: jest.fn(),
  handleSpaceInput: jest.fn(),
  handleEnterInput: jest.fn()
}
test('renders snapshot correctly', () => {
  const { asFragment } = render(<ActionButton {...props} />);
  expect(asFragment).toMatchSnapshot();
});

test('should invoke delete button when label is DELETE', async () => {
  const deleteProps = {
    ...props,
    label: 'DELETE'
  }
  render(<ActionButton {...deleteProps} />);
  const button = await screen.findByText('DELETE');
  fireEvent.click(button);
  expect(deleteProps.handleDeleteInput).toHaveBeenCalled();
});

test('should invoke enter button when label is ENTER', async () => {
  const enterProps = {
    ...props,
    label: 'ENTER'
  }
  render(<ActionButton {...enterProps} />);
  const button = await screen.findByText('ENTER');
  fireEvent.click(button);
  expect(enterProps.handleEnterInput).toHaveBeenCalled();
});

test('should invoke space button when label is SPACE', async () => {
  const spaceProps = {
    ...props,
    label: 'SPACE'
  }
  render(<ActionButton {...spaceProps} />);
  const button = await screen.findByText('SPACE');
  fireEvent.click(button);
  expect(spaceProps.handleSpaceInput).toHaveBeenCalled();
});