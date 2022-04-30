import { render } from '@testing-library/react';
import Layout from './Layout';

test('renders snapshot correctly', () => {
  const { asFragment } = render(<Layout><div>Test</div></Layout>);
  expect(asFragment).toMatchSnapshot();
});
