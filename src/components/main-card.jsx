import React from 'react';
import { IoCart } from 'react-icons/io5';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

import { addToCart } from '../Redux/cartSlice';
import { salePrice, under10Nums } from '../Methods';
import AddToCartButton from './AddToCartButton';

export default function MainCard({ product, details }) {


  return (
    <div className="main-card" key={product.id}>
      <div className="image">
        <Link to={`/product/${product.name}`}>
          <img src={product.Images[0]} alt="" />
          <img src={product.Images[1] ? product.Images[1] : product.Images[0]} alt="" />
        </Link>
        <AddToCartButton product={product} small={true}/>
      </div>
      {product.sale >= 15 && product.stock > 0 && (
        <span className="hot">HOT</span>
      )}
      <div className="holder">
        <h5 className="type"><span>{product.category} /</span>{product.type}</h5>
        <Link to={`/product/${product.name}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="review">
          <div className="stars">
            <Rating
              defaultValue={product.stars}
              precision={product.stars % 1 <= 0.7 ? 0.5 : 1}
              sx={{ fontSize: '20px', color: '#d3ab3f' }}
              readOnly
            />
          </div>
          <p>{product.reviews} Review</p>
        </div>
        {details && (
          <p className="details">{product.details}</p>
        )}
        <div className="lastHolder">
          <div className='price'>
            <p className={product.stock === 0 ? 'last' : 'mainPrice'}>{product.stock !== 0 ? salePrice(product) : `Last Price: $${product.price.toFixed(2)}`}</p>
            {product.sale > 0 && product.stock !== 0 && (
              <>
                <p className="lastPrice">${product.price.toFixed(2)}</p>
                <p className='saleNum'>-{under10Nums(product.sale)}% OFF</p>
              </>
            )}
          </div>
          {product.stock === 0 && (
            <span className='state'>Out Of Stock</span>
          )}
        </div>
      </div>
    </div>
  );
}
