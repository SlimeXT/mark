import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './store/CartSlice';

function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Tính tổng số tiền của giỏ hàng
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Tăng số lượng
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Giảm số lượng
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Xóa sản phẩm
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2>Tổng tiền: ${calculateTotalAmount()}</h2>
      {cart.map(item => (
        <div key={item.name} className="cart-item">
          <img src={item.image} alt={item.name} width="50" />
          <div>
            <h3>{item.name}</h3>
            <p>Giá: ${item.price}</p>
            <p>Tổng: ${item.price * item.quantity}</p>
            <button onClick={() => handleDecrement(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item)}>+</button>
            <button onClick={() => handleRemove(item)}>Delete</button>
          </div>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      <button onClick={() => window.location.href = '/plants'}>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
