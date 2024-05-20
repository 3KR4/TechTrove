import React from 'react';
import '../Css/cart-wishlist-compare.css'
import { useSelector, useDispatch } from 'react-redux';
import { FaMinus, FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../Redux/cartSlice';

import CartCheckoutNav from '../components/cart-checkout-nav'
import { Link } from 'react-router-dom';

import { IoBagRemoveOutline } from "react-icons/io5";

export default function Cart() {
  // @ts-ignore
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="main-holder cart container">
      {cartItems.length == 0 ?
        <div className="noCart">
          <IoBagRemoveOutline />
          <h2>Your Cart is Empty</h2>
          <p>The purchases you add to the cart will occur in this list</p>
          <Link to='/shop' className='main-buttom'>Back To Shop</Link>
        </div>
        : 
        <>
        <div className="products-list-holder">
          <div className="nav-putton row">
            <h4 className='Image'>Image</h4>
            <h4 className='Name'>Name</h4>
            <h4 className='Quantity'>Quantity</h4>
            <h4 className='Price'>Price</h4>
            <h4 className='QuantityPrice'>Quantity Price</h4>
            <h4 className='Remove'>Remove</h4>
          </div>
          <div className='cart-products-holder'>
            <div className="cart-products">
              {cartItems.map((item) => (
                <div key={item.id} className="card full">
                  <div className='image'><img src={item.Images[0]} alt="" /></div>
                  <div className="text">
                    <h5>{item.name}</h5>
                    <h6>Type: {item.type}</h6>
                  </div>
                  <div className="icons">
                    <FaMinus className='decrement' onClick={() => dispatch(decrementQuantity(item))} />
                    <span className="quantityNum">{item.quantity}</span>
                    <FaPlus className='increment' onClick={() => dispatch(incrementQuantity(item))} />
                  </div>
                  <p className="price">${item.price}.00</p>
                  <p className="discount">${(item.price * item.quantity).toFixed(2)}</p>
                  <div><FaRegTrashAlt className='trash' onClick={() => dispatch(removeFromCart(item))} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CartCheckoutNav checkout={false}/>
      </>
    }
    </div>
  );
}
