import React from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

export function ShoppingCart({ cartItems, addToCart }) {
  // console.log(cartItems);

  let cartItemsAmount = cartItems.reduce((acc, val) => {
    return acc + val.amount;
  }, 0);
  let cartItemsPrice = (cartItems.reduce((acc, val) => {
    return acc + (val.amount * val.price)
  }, 0)).toFixed(2)

  return (
    <div className="products">
      {cartItems.map((product) => {
        return (
          <div className="product" key={product.id}>
            <h2>{product.productName}</h2>
            <img
              src={product.src}
              width={'100px'}
              height={'100px'}
              alt={product.productName}
            />

            <p className="amount-price">
              <span className="amount">Items: {product.amount}</span>
              <span className="price">$ {(product.price * product.amount).toFixed(2)}</span>
            </p>

            {/* <p>{product.description}</p> */}

            <AiFillMinusCircle onClick={() => addToCart(product.id, -1)} />
            <AiFillPlusCircle onClick={() => addToCart(product.id)} />
          </div>
        );
      })}
      <div className='products-total'>
      <p>Total of items in cart: {cartItemsAmount}</p>
      <p>Total $ {cartItemsPrice}</p>

      </div>
    </div>
  );
}
