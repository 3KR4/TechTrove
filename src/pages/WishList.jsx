import '../Css/about-cart-wishlist-compare.css'
import { Products } from '../components/products'
import { FaRegTrashAlt } from "react-icons/fa";

export default function WishList() {
  return (
    <div className="main-holder wishlist container">
      <div className="products-list-holder">
          <div className="nav-putton row">
            <h4 className='Image'>Image</h4>
            <h4 className='Name'>Name</h4>
            <h4 className='Price'>Price</h4>
            <h4 className='Sale'>Sale</h4>
            <h4 className='availability'>Availability</h4>
            <h4 className='Add-card'>Add To Card</h4>
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
                      <p className="price">
                        ${product.price}.00
                      </p>
                      <h4 style={{color: product.sale == 0 ? '#909090' : '#1e9147' }} className='sale'>{product.sale == 0 ? 'No Sale' : `-${product.sale}% OFF`}</h4>
                      <h4 style={{color: product.stock == 0 ? '#ce3431' : '#909090' }} className='availability'>{product.stock == 0 ? 'Out Of Stock' : 'In Stock'}</h4>
                      <div className='btn'><button className='main-buttom'>Add To Card</button></div>
                      <div><FaRegTrashAlt className='trash'/></div>
                    </div>
                  ) : (
                    <div key={product.id} className="card mobile">
                      <div className='image'><img src={product.Images[0]} alt=""/></div>
                        <div className="secondHolder">
                          <div className="text">
                            <h5>{product.name}</h5>
                            <h6>Type: {product.type}</h6>
                          </div>
                          <p className="price">
                            ${product.price}.00
                            <h4 style={{color: product.sale == 0 ? '#909090' : '#1e9147' }} className='sale'>{product.sale == 0 ? 'No Sale' : `-${product.sale}% OFF`}</h4>
                          </p>
                          
                          <h4 style={{color: product.stock == 0 ? '#ce3431' : '#909090' }} className='availability'>{product.stock == 0 ? 'Out Of Stock' : 'In Stock'}</h4>
                          <div className='btn'><button className='main-buttom'>Add To Card</button> <div><FaRegTrashAlt className='trash'/></div></div>
                          
                        </div>
                    </div>
                  )
                ))
              }
            </div>
          </div>
      </div>
      
    </div>
  )
}



