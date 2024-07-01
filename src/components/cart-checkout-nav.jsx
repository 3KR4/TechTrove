import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Products } from '../components/products';
import '../Css/about-cart-wishlist-compare.css';
import { calculateTotalPrice } from '../Methods'

export default function CartCheckoutNav({ checkout }) {
  // @ts-ignore
  const cartItems = useSelector((state) => state.cart.cartItems);


  return (
    <div className="cart-code">
      {!checkout && (
        <>
          <div className="Coupon">
            <div className="holder">
              <p>Apply Coupon to get a discount!</p>
              <div className="ptn">
                <input type="text" placeholder="Coupon Code" />
                <button className="main-buttom apply">APPLY</button>
              </div>
            </div>
          </div>
          <hr />
        </>
      )}
      <div className="totalPrices">
        <div className="product">
          <h6>Pricing Table</h6>
          <div className="productsNameHolder">
            {cartItems.map((cartItem) => {
                const product = Products.find(product => product.id === cartItem.id);
                return product ? (
                  <div key={product.id}>
                    <span>{product.name} <h6>x{cartItem.quantity}</h6></span>
                    <span>${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
                  </div>
                ) : null;
              })
            }
          </div>
          <h5>
            <span className="final-span">Total Order Price</span>
            <span className="finalPrice">${calculateTotalPrice(cartItems).toFixed(2)}</span>
          </h5>
        </div>
        {!checkout && (
          <Link to='/checkout' className="main-buttom">Check Out</Link>
        )}
      </div>
    </div>
  );
}
