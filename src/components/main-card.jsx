import { salePrice, under10Nums } from '../Methods'
import React from 'react'
import { IoCart } from 'react-icons/io5'
import { FaHeartCirclePlus } from 'react-icons/fa6'
import { Rating } from '@mui/material'

export default function MainCard({product}) {
  return (
    <div className="main-card" key={product.id}>
    <div className="image">
      <img src={product.Images[0]} alt="" />
      <img src={product.Images[1] ? product.Images[1] : product.Images[0] } alt="" />
      <button className="main-buttom">
        <h5>                
          <IoCart />
          Add To Cart
        </h5>
        <h5>                
          <FaHeartCirclePlus />
        </h5>
      </button>
    </div>
    {product.sale >= 15 && product.stock > 0 && (
      <span className="hot">HOT</span>
    )}
    <div className="holder">
      <h5 className="type"><span>{product.category} /</span>{product.type}</h5>
      <a href="product.html"><h3>{product.name}</h3></a>
      <div className="review">
        <div className="stars">
          <Rating
            defaultValue={product.stars}
            precision={product.stars % 1 <= 0.7 ? 0.5 : 1}
            sx={{ fontSize: '20px', color: '#d3ab3f' }} // Use an object to define CSS properties
            readOnly
          />
        </div>
        <p>{product.reviews} Review</p>
      </div>
      <div className="lastHolder">
        <h4 className='price'>${salePrice(product)} {product.sale > 0 && product.stock > 0 && (
          <p className='saleNum'>-{under10Nums(product.sale)}% OFF</p>)}
        </h4>
        {product.stock === 0 && (
        <span className='state'>Out Of Stock</span>
        )}
      </div>
    </div>
  </div>
  )
}
