import React from 'react';
import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;
