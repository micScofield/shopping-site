import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/button/Button';
import CartItem from 'components/app-specific/cart/cart-item/CartItem.js';
import 'components/app-specific/cart/cart-dropdown/cart-dropdown.styles.scss';
import { CartContext } from 'contexts/cart.context';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length !== 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <h2>No items added yet !</h2>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
