import '../Css/product.css'
import { Link, useParams } from "react-router-dom";
import { Products, brands} from '../components/products'
import { useState } from "react";
import { Rating, TextField } from "@mui/material";
import { salePrice, under10Nums } from "../Methods";
import genrateProductSwiper from "../components/genrateProductSwiper";
import AddToCartButton from '../components/AddToCartButton';

import { IoMdCloseCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoCart, IoClose } from 'react-icons/io5'
import { FaCodeCompare, FaHeartCirclePlus } from "react-icons/fa6";



export default function Product() {
  const { productName } = useParams();
  let product = Products.find((x) => x.name == productName)
  let brand = brands.find((x) => x.id == product.brand.toLowerCase())
  const [activeImg, setActiveImg] = useState(product.Images[0])
  const [instock, setIsStock] = useState(product.stock !== 0)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageHover, setIsImgHover] = useState(false);
  const [reviewModel, setReviewModel] = useState(false);

  document.title = product.name

  const handleMouseMove = (e) => {
    const { x, y, width, height } = e.target.getBoundingClientRect();
    const mouseX = (e.clientX - e.target.offsetLeft) / width;
    const mouseY = (e.clientY - e.target.offsetTop) / height;
    setMousePosition({ x: Number(`-${mouseX}`) , y: Number(`-${mouseY}`) });
  };


  let suggestedProducts1 = Products.filter((x) => x.type == product.type)
  let suggestedProducts2 = Products.filter((x) => x.brand == product.brand)



  return (
    <div className="single-product container">
      {reviewModel ? <div className="hide"></div> : null}
      <div className="top-space">
        <div className="image-holder">
        {product.Images.length > 1 && (
          <div className="small-images">
            {product.Images.map((imageUrl, index) => (
              <img 
                key={index} 
                src={imageUrl} 
                alt={`Image ${index + 1}`} 
                className={activeImg === imageUrl ? 'active' : ''}
                onMouseEnter={() => {
                  setActiveImg(imageUrl);
                }}
              />
            ))}
          </div>
        )}
          <div className="mainImage" onMouseMove={handleMouseMove} onMouseLeave={() => {
            setMousePosition({ x: 0, y: 0 })
            setIsImgHover(false)
            }}>
            <img src={activeImg} alt="" onMouseEnter={() => {
              setIsImgHover(true)
            }}
            style={{
              transform: `translate(${isImageHover ? mousePosition.x * 100 + 35 : 0}px, ${isImageHover ? mousePosition.y * 100 + 30 : 0}px)`,
            }}
            />
          </div>
        </div>
        <div className="info-holder">
          <h5 className="type"><span>{product.category} /</span>{product.type}</h5>
          <h3>{product.name}</h3>
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

            <span className='state'>Availability: 
              <span style={{color: instock ? '#1e9147' : '#ce3636'}}>
                {!instock ? <IoMdCloseCircle style={{ fontSize: '20px'}}/> : <FaCheckCircle/>}
                {!instock ? 'Out Of Stock' : 'In Stock'}
              </span>
              {instock && product.stock <= 6 && (
                <p className="pieces-left">Don't Miss Out, only 0{product.stock} pieces left in stock</p>
              )}
            </span>

            <div className='price'>
              <p className={!instock ? 'last' : 'mainPrice'}>{instock ? salePrice(product) : `Last Price: $${product.price.toFixed(2)}`}</p>
              {product.sale > 0 && instock && (
                <>
                <p className="lastPrice">${product.price.toFixed(2)}</p> 
                <p className='saleNum'>-{under10Nums(product.sale)}% OFF</p>
                </>
              )}
            </div>
            {brand && (
                <Link to={`/shop/${brand.id}`} className="brand">
                  <p>Brand:</p>
                  <img src={brand.img} alt="" />
                </Link>
            )}
            <p className="details">
              {product.details}
            </p>
            <div className="buttons">
              <AddToCartButton product={product} small={false}/>
              <button className="main-buttom"><FaCodeCompare/> <span> Compare</span></button>
              <button className="main-buttom"><FaHeartCirclePlus/> <span> Add To Wishlist</span></button>
            </div>
        </div>
      </div>
      <div className="bottom-space">
      <div className="big-area">
        <div className="info-area1" style={!product.specifications ? {display: 'flex', gap: '60px'} : {}}>
          {product.about && (
            <div className="features">
            <h5>Features</h5>
            <ul>
              {product.about.map((x) => (
                <li key={x}>{x}</li>
              ))}
              
            </ul>
          </div>
          )}
          <div className="shipping-options">
            <h5>Shipping Options:</h5>
            <ul>
              <li>Courier:<span>2 - 4 days, $22.50</span></li>
              <li>Local Shipping:<span>up to one week, $10.00</span></li>
              <li>UPS Ground Shipping:<span>4 - 6 days, $18.00</span></li>
              <li>Unishop Global Export:<span>3 - 4 days, $25.00</span></li>
            </ul>
          </div>
        </div>
          {product.specifications && (
            <div className="specifications">
              <h5>Specifications</h5>
              <ul>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key}>
                    <span>{key}: </span>{value}
                  </li>
                ))}
              </ul>
          </div>
          )}
      </div>
      <div className="suggestedProducts">

        <div className="container">
          <div className="suggested">
            <h4 className="productsTitle">
              suggested {product.type}s
            </h4>
            {genrateProductSwiper(Products)}
          </div>
          <div className="brandproduct">
            <h4 className="productsTitle">
              more {product.brand} products
            </h4>
            {genrateProductSwiper(Products)}
          </div>
        </div>
      </div>
      <div className="botom-area">
        <div className="overall">
          <h3>(Overall Rating {product.stars} / 5)</h3>
          <ul>
            <li><span>5 stars - 38</span><div className="stars">              
            <Rating
                defaultValue={product.stars}
                precision={product.stars % 1 <= 0.7 ? 0.5 : 1}
                sx={{ fontSize: '18px', color: '#d3ab3f' }}
                readOnly
              /></div></li>
            <li><span>4 stars - 10</span><div className="stars">             
              <Rating
                defaultValue={product.stars}
                precision={product.stars % 1 <= 0.7 ? 0.5 : 1}
                sx={{ fontSize: '18px', color: '#d3ab3f' }} 
                readOnly
              /></div></li>
            <li><span>3 stars - 3</span><div className="stars">              
            <Rating
                defaultValue={product.stars}
                precision={product.stars % 1 <= 0.7 ? 0.5 : 1}
                sx={{ fontSize: '18px', color: '#d3ab3f' }} 
                readOnly
              /></div></li>
            <li><span>2 stars - 1</span><div className="stars">              
            <Rating
                defaultValue={product.stars}
                precision={product.stars % 1 <= 0.7 ? 0.5 : 1}
                sx={{ fontSize: '18px', color: '#d3ab3f' }} 
                readOnly
              /></div></li>
            <li><span>1 star - 0</span><div className="stars">              
            <Rating
                defaultValue={product.stars}
                precision={product.stars % 1 <= 0.7 ? 0.5 : 1}
                sx={{ fontSize: '18px', color: '#d3ab3f' }} // Use an object to define CSS properties
                readOnly
              /></div></li>
          </ul>

          <button className="main-buttom" onClick={() => {
            setReviewModel(true)
          }}>
            Leave a Review
          </button>
        </div>
        {product.testimonies && (
          <div className="ReviewS" style={{maxHeight: product.testimonies.length > 3 ? '345px' : 'unset'}}>
            <h1>Clints Reviews</h1>
            {product.testimonies.map((x) => (
              <div key={x.id} className="card">
                <h3 className='imageText'>
                  {x.name.split(' ').length === 1 ? x.name.substring(0, 2)
                  : `${x.name.split(' ')[0][0]}${x.name.split(' ')[1][0]}`}
                </h3>
                <div className="text">
                  <h3>{x.name}</h3>
                  <div className="stars">              
                  <Rating
                    defaultValue={x.stars}
                    precision={x.stars % 1 <= 0.7 ? 0.5 : 1}
                    sx={{ fontSize: '18px', color: '#d3ab3f' }}
                    readOnly
                  />
                  <p>{x.details}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        )}

    </div>
      </div>

      <div className={`reviewModal ${reviewModel ? 'active' : ''}`}>
        <IoClose onClick={() => {
          setReviewModel(false)
        }}/>
        <h3>Leave a Review</h3>
        <TextField
          className="input"
          label="Whats on your mind"
          variant="filled"
          multiline
          rows={2}
        />
        <Rating
          defaultValue={0}
          precision={1}
        />
        <button className="main-buttom" onClick={() => {
          setReviewModel(false)
        }}>Send</button>
      </div>
    </div>
  )
}
