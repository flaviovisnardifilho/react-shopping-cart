import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ProductCard } from '../ProductCard';

describe('The Product Card', () => {
  const MockProps = {
    id: 1,
    src: '/image',
    productName: 'Example',
    description: 'Description of product',
    avaiable: 5,
    price: 10,
  };

  const MockProductCard = () => {
    return (
      <BrowserRouter>
        <ProductCard {...MockProps} />
      </BrowserRouter>
    );
  };

  it('renders on screen', () => {
    render(<MockProductCard />);
    const card = screen.getByText('Example');
    expect(card).toBeInTheDocument();
  });

  it('shows an image', () => {
    render(<MockProductCard />);
    const image = screen.getByRole('img', { src: '/image' });
    expect(image).toBeInTheDocument();
  });

  it('has an amount avaiable', () => {
    render(<MockProductCard />);
    const amount = screen.getByTestId('amount').textContent;
    expect(amount).toEqual('Items left: 5');
  });

  it('has a price', () => {
    render(<MockProductCard />);
    const price = screen.getByTestId('price').textContent;
    expect(price).toEqual('10');
  });

});
