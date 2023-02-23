import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ShoppingCart } from '../ShoppingCart';

describe('The Shopping Cart screen', () => {
  const cart = [
    {
      id: '2',
      amount: 3,
      productName: 'Product 1',
      description: 'Description of product 1',
      src: '/image-example1',
      avaiable: 5,
      price: 10,
    },
    {
        id: '3',
        amount: 1,
        productName: 'Product 2',
        description: 'Description of product 2',
        src: '/image-example2',
        avaiable: 1,
        price: 20,
      },
  ];
 
  const MockShoppingCart = () => {
    return (
      <BrowserRouter>
        <ShoppingCart cartItems={cart} addToCart={mockAddToCart} />
      </BrowserRouter>
    );
  };

  const mockAddToCart = jest.fn();


  it('renders the products in the cart', ()=> {
    render(<MockShoppingCart/>);
    const product2= screen.getByText('Product 2')
    expect(product2).toBeInTheDocument()
  });
});
