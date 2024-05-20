import '../Css/cart-wishlist-compare.css'
import React from 'react'
import { Link } from "react-router-dom";
import { Products, brands } from '../components/products'
import { Rating } from '@mui/material';
import { salePrice, under10Nums } from "../Methods";

import { IoMdCloseCircle } from "react-icons/io";
import { FaCheckCircle, FaRegTrashAlt } from "react-icons/fa";

export default function Compare () {
  const fields = ['Images', 'reviews', 'stock', 'price', 'brand', 'details', 'about' , 'specifications', 'actions'];
  const renderProductInfo = (product, field) => {
    let brand = brands.find((x) => x.id == product.brand.toLowerCase()) || { id: product.brand, img: null };
    switch (field) {
      case 'Images':
        return (
          <div className='mainImage'><img src={product.Images[0]} alt={product.name}/></div>
        )
      case 'reviews':
        return (
          <div className="review">
            <div className="stars">
              <Rating
                defaultValue={product.stars}
                precision={product.stars % 1 <= 0.7 ? 0.5 : 1}
                sx={{ fontSize: '21px', color: '#d3ab3f' }}
                readOnly
              />
            </div>
            <p>{product.reviews > 0 ? `${product.reviews} Review` : `( There are no reviews yet )`}  </p>
          </div>
        )
      case 'stock':
        return (
          <span className='state'>Availability: 
            <span style={{color: product.stock != 0 ? '#1e9147' : '#ce3636'}}>
              {product.stock == 0 ? <IoMdCloseCircle style={{ fontSize: '20px', marginRight: '-1px'}}/> : <FaCheckCircle/>}
              {product.stock == 0 ? 'Out Of Stock' : 'In Stock'}
            </span>
            {product.stock != 0 && product.stock <= 6 && (
              <p className="pieces-left">only 0{product.stock} pieces left in stock</p>
            )}
          </span>
        )
      case 'price':
        return (
          <div className='price'>
            <p className={product.stock == 0 ? 'last' : 'mainPrice'}>{product.stock != 0 ? salePrice(product) : `Last Price: $${product.price.toFixed(2)}`}</p>
            {product.sale > 0 && product.stock != 0 && (
              <>
                <p className="lastPrice">${product.price.toFixed(2)}</p> 
                <p className='saleNum'>-{under10Nums(product.sale)}% OFF</p>
              </>
            )}
          </div>
        )
      case 'brand':
        return (
          <Link to={`/shop/${brand.id}`} className="brand">
            {!brand.img && <p>{product.brand.trim() ? brand.id : "Not available"}</p>}
            {brand.img ? <img src={brand.img} alt="" /> : null}
          </Link>
        );
      
      case 'details':
        return (
          <p className='details'>{product.details}</p>
        );

      case 'about':
        return (
          <ul className='about'>
            {product.about.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        );
      
      case 'specifications':
      if (product.specifications) {
        return (
          <ul className='specifications'>
            {Object.entries(product.specifications).map(([key, value], index) => (
              <li key={index}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
        );
      } else {
        return <p className='specific'>No specifications available</p>;
      }
      case 'actions':
        return (
          <div className='actions'>
            {product.stock > 0 && (<button className='main-buttom'>Add To Card</button>)}
            <button className='main-buttom remove'>Remove</button>
          </div>
        );

      default:
        return product[field];
    }
  };
  return (
    <div className='compare-page container'>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              {Products.map((product, index) => (
                <th key={index}>{product.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fields.map((field) => (
              <tr key={field}>
                <td>{field}</td>
                {Products.map((product, index) => (
                  <td key={index}>
                    {renderProductInfo(product, field)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
