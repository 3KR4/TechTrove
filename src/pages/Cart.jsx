import '../Css/cart-wishlist.css'
import { Products } from '../components/products'
import React from 'react'

import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { salePrice, under10Nums } from '../Methods';

export default function Cart() {
  return (
    <div className="main-holder cart container">
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
              {
                Products.map((product) => (
                  window.innerWidth > 768 ? (
                    <div key={product.id} className="card full">
                      <div className='image'><img src={product.Images[0]} alt=""/></div>
                      <div className="text">
                        <h5>{product.name}</h5>
                        <h6>Type: {product.type}</h6>
                      </div>
                      <div className="icons">
                        <FaMinus className='decrement'/>
                        <span className="quantityNum">
                          1
                        </span>
                        <FaPlus className='increment'/>
                      </div>
                      <p className="price">
                        ${product.price}.00
                      </p>
                      <p className="discount">
                        ${product.price}.00
                      </p>
                      <div><FaRegTrashAlt className='trash'/></div>
                    </div>
                  ) : (
                    <div key={product.id} className="card mobile">
                      <div className='image'><img src={product.Images[0]} alt=""/></div>
                      <div className="type">
                        <h4>{product.name}</h4>
                        <h5><span>{product.category} /</span>{product.type}</h5>
                        <div className='price'>
                          <p className={product.stock === 0 ? 'last' : 'mainPrice'}>{product.stock !== 0 ? salePrice(product) : `Last Price: $${product.price.toFixed(2)}`}</p>
                          {product.sale > 0 && product.stock !== 0 && (
                            <>
                            <p className="lastPrice">${product.price.toFixed(2)}</p> 
                            <p className='saleNum'>-{under10Nums(product.sale)}% OFF</p>
                            </>
                          )}
                        </div>
                          <h4>Total Price: <span>{salePrice(product)}</span></h4>
                        <div className="icons">
                          <FaMinus className='decrement'/>
                          <span className="quantityNum">
                            1
                          </span>
                          <FaPlus className='increment'/>
                          <FaRegTrashAlt className='trash'/>
                        </div>

                      </div>
                    </div>
                  )
                ))
              }
            </div>
          </div>
      </div>
      <div className="cart-code">
        <div className="Coupon">
          <div className="holder">
            <p>Appy Coupon to get discount!</p>
            <div className="ptn">
              <input type="text" placeholder="Coupon Code"/>
              <button className="main-buttom apply">APPLY</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="totalPrices">
          <div className="product">
            <h6>Pricing Table</h6>
            <div className="productsNameHolder">
              {Products.map((x) => (
                <div key={x.id}>
                  <span>{x.name} <h6>x1</h6></span>
                  <span>${x.price},00</span>
                </div>
              ))}
            </div>
            <h5>
              <span className="final-span">Total Order Price</span>
              <span className="finalPrice">$1200.00</span>
            </h5>
            </div>
            <a className="main-buttom" href="checkout.html">Check Out</a>
        </div>
      </div>
    </div>
  )
}
