import * as React from 'react';
import { useTheme } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import { types, Products } from './components/products';
import { salePrice, under10Nums, calculateTotalPrice } from './Methods.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './Redux/cartSlice';


// @ts-ignore
import logo from './img/logo.png'
//ICONS
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faListNumeric, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'; // For regular solid icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
import GrainOutlinedIcon from '@mui/icons-material/GrainOutlined';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaAngleDown, FaTwitter, FaFacebook, FaTiktok, } from 'react-icons/fa';
import { IoMdSearch, IoIosGitCompare } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiShoppingBasket2Line } from "react-icons/ri";


const searchProducts = (searchTerm) => {
  if (searchTerm.length === 0) {
    return [];
  }
  return Products.filter((product) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.type.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.category.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.brand.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
};

export default function Headers({setMode}) {

  const theme = useTheme()
  let currentpage = localStorage.page
  const [activeCategory, setActiveCategory] = useState((types[0].id));
  
  const [isSticky, setIsSticky] = useState({header1: false, header2:false});
  const [searchTerm, setSearchTerm] = useState('');
  const [openModels, setOpenModels] = useState({
    menu: false,
    cart: false,
    search: false,
    searchCards: false,
  });

  const menuRef = useRef(null);
  const searchRef = useRef(null);
      // @ts-ignore
      const cartItems = useSelector((state) => state.cart.cartItems);
      const dispatch = useDispatch();


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current.contains(event.target) && !searchRef.current.contains(event.target)) {
        setOpenModels(prevState => ({
          ...prevState,
          menu: false,
          search: false,
        }));
      }
    };
  
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(prevState => ({
        ...prevState,
        header1: window.scrollY > 102,
        header2: window.scrollY > 51
      }));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const toggleActive = (categoryId) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId);
  };

  const toggleModel = (modelName) => {
    setOpenModels(prevState => ({
      ...prevState,
      [modelName]: !prevState[modelName]
    }));
  };
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 1) {
      setOpenModels(prevState => ({
        ...prevState,
        ['searchCards']: true,
      }));
    } else {
      setOpenModels(prevState => ({
        ...prevState,
        ['searchCards']: false,
      }));
    }
  };

  const filteredProducts = searchProducts(searchTerm);



  return (
    <div className='header'>
    {openModels.menu || openModels.search ? <div className="hide"></div> : null}
      <div className="mobile container" style={{marginBottom: isSticky.header2 ? '65px' : '0px'}}>
        <div className="signBtns">
          <NavLink to="/register">Register</NavLink>
          |
          <NavLink to="/login">Login</NavLink>
        </div>
        <div className="follow">
        <h5>Follow us at</h5> | 
          <div className="social">
            <FaFacebook  />
            <FaTwitter  />
            <BiLogoInstagramAlt />
            <FaTiktok  />
          </div>
        </div>

      </div>
      <div className={`top container ${isSticky.header2 ? 'sticky' : ''}`} style={{marginBottom: isSticky.header1 ? currentpage == 'shop' ? '90px' : '56px' : '0px', zIndex: openModels.search ? '101' : '99' }}>
        <div className="logo">        
          <FontAwesomeIcon className='menuBar' icon={faBarsStaggered} onClick={() => {
            toggleModel('menu')
          }}/>
          <Link to={`/`}>
            <img src={logo} alt="logo" />
            <h3>Tech<span>Trove</span></h3>
          </Link>
        </div>
        <div ref={searchRef} className={`search ${openModels.search ? 'active' : ''}`}>
          <input type="text" placeholder='Search Here ...' value={searchTerm} onChange={handleSearch} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <div className={`cards ${openModels.searchCards ? 'active' : ''}`} style={{width: filteredProducts.length > 3 ? "109%" : "auto"}}>
            {filteredProducts.map(product => (
              <Link to={`/product/${product.name}`} className="card" key={`${product.id}-${product.name}`}> 
                <div className='holder'>
                  <img src={product.Images[0]} alt=""/>
                  <div className="info">
                    <h3> 
                      {product.name}
                    </h3>
                    <h5 className="type">{product.type}</h5>
                    <div className='price'>
                      <p className={product.stock === 0 ? 'last' : 'mainPrice'}>{product.stock !== 0 ? salePrice(product) : `Last Price: $${product.price.toFixed(2)}`}</p>
                      {product.sale > 0 && product.stock !== 0 && (
                        <>
                        <p className="lastPrice">${product.price.toFixed(2)}</p> 
                        <p className='saleNum'>-{under10Nums(product.sale)}% OFF</p>
                        </>
                      )}
                    </div>
                    <span className='category'>{product.category}</span>
                    <span style={{color: product.stock !== 0 ? '#1e9147' : '#ce3636'}} className='state'>{product.stock !== 0 ? 'In Stock' : 'Out Of Stock'}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="user">
          <div className="signBtns">
          <NavLink to="/Register">Register</NavLink>
          |
          <NavLink to="/Login">Login</NavLink>
          </div>
          <div className="holder">
            <IoMdSearch  className='searchico' onClick={() => {
              toggleModel('search')
            }}/>
            <div className='darkLight'>
            {theme.palette.mode === "light" ?

              <LightModeOutlinedIcon onClick={(params) => {
                setMode((prevMode) =>
                  prevMode === 'light' ? 'dark' : 'light',
                );
                localStorage.setItem("theme", "dark")
              }
              }/>
            :
              <DarkModeOutlinedIcon onClick={(params) => {
                setMode((prevMode) =>
                  prevMode === 'light' ? 'dark' : 'light',
                );
                localStorage.setItem("theme", "light")
              }
              }/>
            }
            </div>
            <Link to={`/compare`} className='comparePtn'>
              <IoIosGitCompare style={{ fontSize: '26px'}}/>
              <span className='nmbers'>3</span>
            </Link>
            <Link to={`/wishlist`}>
              <FavoriteBorderOutlinedIcon />
              <span className='nmbers'>3</span>
            </Link>
            <button className='cartBtn' onClick={() => {
              toggleModel('cart')
            }}>
            <LocalGroceryStoreOutlinedIcon/>
              <span className='nmbers'>{cartItems.length}</span>
              <div className={`cart`}>
              <div className="main-cart">
                {cartItems.length == 0 ? (
                  <h3>Your Cart is Empty</h3>
                ) : (
                <div>
                  <div className="item">
                    <h3 className='itemsLeanth'><span className="length">{cartItems.length}</span> Items</h3>
                    <Link to={`/cart`}>View Cart</Link>
                  </div>
                  <div className="cards" style={{width: Products.length > 3 ? "109%" : "auto"}}>
                    {cartItems.map((item, index) => (
                      <div className="card" key={`${item.id}-${index}`}>
                        <div className='holder'>
                          <img src={item.Images[0]} alt=""/>
                          <div className="info">
                            <Link to={`/product/${item.name}`}>{item.name}</Link>
                            <h5 className="type"><span>{item.category} /</span>{item.type}</h5>
                            <div className='price'>
                              <p className={item.stock === 0 ? 'last' : 'mainPrice'}>{item.stock !== 0 ? salePrice(item) : `Last Price: $${item.price.toFixed(2)}`}</p>
                              {item.sale > 0 && item.stock !== 0 && (
                                <>
                                  <p className="lastPrice">${item.price.toFixed(2)}</p> 
                                  <p className='saleNum'>-{under10Nums(item.sale)}% OFF</p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <IoClose onClick={() => dispatch(removeFromCart(item))}/>
                      </div>
                    ))}
                  </div>
                  <div className="total">
                    <h3>Total Price</h3>
                    <h3 className="cartProductTotal">${calculateTotalPrice(cartItems).toFixed(2)}</h3>
                  </div>
                  <NavLink to="/checkout" className='Check main-buttom'>Check Out</NavLink>
                </div>
                )}
              </div>
              </div>
            </button>
          </div>
        </div>
        
      </div>
        <div className={`bottom ${isSticky.header1 ? 'sticky' : ''}`} style={{zIndex: openModels.menu ? '100' : '5'}}>
          <div className="container">
          <ul ref={menuRef} className={`menu ${openModels.menu ? "active" : ""}`}>
            <li> 
              <div className='categoriesTitle'>
                <FontAwesomeIcon className='categorieBar' icon={faBarsStaggered} />
                CATEGORIES
                <IoClose className='xClose' onClick={() => {
                  toggleModel('menu')
                }}/>
              </div>
            <div className="megaMenu">
            {types.map((category) => (
          <div className="category" key={category.id}>
            <span onClick={() => toggleActive(category.id)} className={activeCategory === category.id ? 'active' : ''}>
              {category.id}
              <FaAngleDown className={activeCategory === category.id && 'open'}/>
            </span>
            <ul className={`types ${activeCategory === category.id ? 'active' : ''}`}>
              {category.list.map((item) => (
                <li key={item.id}><Link to={`/shop?category=${category.id}&type=${item.id}`}>{item.id}</Link></li>
              ))}
            </ul>
          </div>
        ))}
            </div>
            </li>
            <li><Link to={'./'}><HomeOutlinedIcon /> home</Link></li>
            <li><Link to={'./shop'}><RiShoppingBasket2Line /> shop</Link></li>
            <li><Link to={'./about'}><PeopleAltOutlinedIcon /> about us</Link></li>
            <li><Link to={'./contact'}><MarkEmailUnreadOutlinedIcon /> contact us</Link></li>
            <li><Link to={'./blogs'}><SpeakerNotesOutlinedIcon /> blogs</Link></li>
            <li><Link to={'./shop?special=true'}><GrainOutlinedIcon /> special offer</Link></li>
            <li className='compareIco'><Link to={'./compare'}><IoIosGitCompare /> compare</Link></li>
          </ul>
          <div className="follow">
            <h5>Follow us at</h5> | 
            <div className="social">
              <FaFacebook  />
              <FaTwitter  />
              <BiLogoInstagramAlt />
              <FaTiktok  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
