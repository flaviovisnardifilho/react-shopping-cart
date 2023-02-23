import React from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

export function ShoppingCart({ cartItems, addToCart }) {
  let cartItemsAmount = cartItems.reduce((acc, val) => {
    return acc + val.amount;
  }, 0);
  let cartItemsPrice = cartItems
    .reduce((acc, val) => {
      return acc + val.amount * val.price;
    }, 0)
    .toFixed(2);

  return (
    <div className="products">
      {cartItems.map((product) => {
        return (
          <div
            className="product-cart"
            data-testid={`product-cart-${product.id}`}
            key={product.id}
          >
            <div className="left-card">
              <h2>{product.productName}</h2>
              <img
                src={product.src}
                width={'100px'}
                height={'100px'}
                alt={product.productName}
              />
            </div>
            <div className="right-card">
              <div className="amount-price">
                <div className="buttons-amount">
                  <button className="minus-button">
                    <AiFillMinusCircle
                      className="minus-plus-item"
                      onClick={() => addToCart(product.id, -1)}
                    />
                  </button>
                  <input
                    className="input-amount"
                    value={product.amount}
                    onChange={(e) =>
                      addToCart(
                        product.id,
                        Number(e.target.value) - product.amount
                      )
                    }
                  />
                  <button className="plus-button">
                    <AiFillPlusCircle
                      className="minus-plus-item"
                      onClick={() => addToCart(product.id)}
                    />
                  </button>
                </div>
                {/* <span className="amount">Items: {product.amount}</span> */}
                <span className="price">
                  $ {(product.price * product.amount).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <div className="products-total">
        <p>Total of items in cart: {cartItemsAmount}</p>
        <p>Total $ {cartItemsPrice}</p>
      </div>
    </div>
  );
}
