import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ShoppingCart } from './pages/ShoppingCart';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { ProductList } from './pages/ProductList';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

import { Navbar } from './components/Navbar';

import { products as initialProducts } from './data';

function App() {
  const [productList, setProductList] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(id, amount = 1) {
    const productAvaiable =
      productList.filter((prod) => prod.id === id)[0].avaiable > 0
        ? true
        : false;
    if (!productAvaiable && amount > 0) return;

    const productAlreadyOnCart = cartItems.find((prod) => prod.id === id);

    let nextCart = [];
    let nextProductList = [...productList];

    if (productAlreadyOnCart) {
      nextCart = [...cartItems];
      const currentItem = nextCart.find((item) => item.id === id);

      if (currentItem.amount + amount === 0) {
        nextCart = nextCart.filter((item) => item.id !== currentItem.id);
        setCartItems(nextCart);
      } else {
        currentItem.amount = currentItem.amount + amount;
      }
    } else {
      const newItem = productList.find((item) => item.id === id);
      nextCart = [...cartItems, { id: id, amount: amount, ...newItem }];
    }

    nextProductList.map((prod) =>
      prod.id === id ? (prod.avaiable = prod.avaiable - amount) : prod
    );

    setCartItems(nextCart);
    setProductList(nextProductList);
  }

  const cartAmount = cartItems.reduce((prev, acc) => {
    return prev + acc.amount;
  }, 0);

  return (
    <>
      <Navbar amountItems={cartAmount}></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shoppingcart"
          element={<ShoppingCart cartItems={cartItems} addToCart={addToCart} />}
        />
        <Route path="/products">
          <Route index element={<ProductList products={productList} />} />
          <Route
            path=":id"
            element={<Product products={productList} addToCart={addToCart} />}
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
