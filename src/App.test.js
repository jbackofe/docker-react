import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Geaux Audio link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Geaux Audio/i);
  expect(linkElement).toBeInTheDocument();
});

