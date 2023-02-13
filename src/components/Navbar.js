import { NavLink } from 'react-router-dom';
import { RiShoppingCartFill } from 'react-icons/ri';

export function Navbar({ amountItems }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink end to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li style={{ display: 'flex', gap: '8px' }}>
          <NavLink to="/shoppingcart">
            <RiShoppingCartFill color="orange" />
          </NavLink>
          {amountItems}
        </li>
      </ul>
    </nav>
  );
}
