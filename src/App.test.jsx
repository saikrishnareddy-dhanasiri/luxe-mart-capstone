import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Navbar from './components/Navbar';

describe('LuxeMart Branding Test', () => {
  it('checks if the logo LUXEMART is rendered in the Navbar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    
    const logoElement = screen.getByText(/LUXEMART/i);
    expect(logoElement).toBeInTheDocument();
  });
});