import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductList } from '../ProductList';

describe('The ProductList Screen', () => {
  const products = [
    {
      id: '1',
      productName: 'Strong Armor',
      description:
        "Stay protected in any ...",
      src: '',
      avaiable: 3,
      price: 338.98,
    },
    {
      id: '2',
      productName: 'Durable Backpack',
      description:
        "The perfect companion for...",
      src: '',
      avaiable: 1,
      price: 188.98,
    },
  ];

  const MockProductList = () => {
    return (
      <BrowserRouter>
        <ProductList products={products} />
      </BrowserRouter>
    );
  };
  render(<MockProductList />);

  it('renders a card', () => {
    const card = screen.getByText(/durable backpack/i);
    expect(card).toBeInTheDocument();
  });

  it('navigate correctly for the product page', () => {
    render(<MockProductList />);
    const product = screen.getByTestId('product-link-1')
    expect(product.getAttribute('href')).toBe('/1');
  })



});
