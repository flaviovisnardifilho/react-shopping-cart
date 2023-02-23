import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('The Navbar', () => {
  const MockNavbar = () => {
    return (
      <BrowserRouter>
        <Navbar amountItems={5} />
      </BrowserRouter>
    );
  };

  describe('navigate correctly', () => {
    it('to Home', () => {
      render(<MockNavbar />);
      const navHome = screen.getByRole('link', { name: /home/i });
      expect(navHome.getAttribute('href')).toBe('/');
    });
  });

  it('to Products', () => {
    render(<MockNavbar />);

    const navProducts = screen.getByRole('link', { name: /products/i });
    expect(navProducts.getAttribute('href')).toBe('/products');
  });

  it('to Contact', () => {
    render(<MockNavbar />);
    const navContact = screen.getByRole('link', { name: /contact/i });
    expect(navContact.getAttribute('href')).toBe('/contact');
  });

  it('to About', () => {
    render(<MockNavbar />);
    const navAbout = screen.getByRole('link', { name: /about/i });
    expect(navAbout.getAttribute('href')).toBe('/about');
  });

  //TODO Improve this test
  it('to ShoppingCart', () => {
    render(<MockNavbar />);
    const navCart = screen.getByRole('link', { name: '' });
    expect(navCart.getAttribute('href')).toBe('/shoppingcart');
  });

  it('shows amount of items', () => {
    render(<MockNavbar />);
    const amount = screen.getByText(/5/i).textContent;

    expect(amount).toEqual('5');
  });
});
