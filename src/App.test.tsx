import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio headline', () => {
  render(<App />);
  expect(screen.getAllByText(/Aashya/i).length).toBeGreaterThan(0);
});
