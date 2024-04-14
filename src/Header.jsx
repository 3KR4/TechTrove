import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { useTheme } from '@mui/material';

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
import { FaAngleDown, FaAngleUp, FaTwitter, FaFacebook, FaTiktok, } from 'react-icons/fa';
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
// @ts-ignore
import logo from './img/logo.png'
import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import allProducts from './components/products';




export default function Headers({setMode}) {
  const theme = useTheme()
  
    const type = [
    {
      id: "Hardware",
      list: ["GraphicCard", "MotherBoard", "Memory", "Procesor", "Storage"],
    },
    {
      id: "Accessories",
      list: ["keyboard", "Mouse", "HeadPhone", "Speakers", "MousePad"],
    },
    {
      id: "Electronics",
      list: ["Smartphones", "Laptops", "Tablets", "Cameras", "Smartwatches"],
    },
    {
      id: "Monitor",
      list: ["Television", "Gaming Monitor"],
    },
    {
      id: "Other",
      list: ["Chair", "Console",],
    },
  ]


  const [activeCategory, setActiveCategory] = useState((type[0].id));
  
  const [isSticky, setIsSticky] = useState({header1: false, header2:false});

  const [openModels, setOpenModels] = useState({
    menu: false,
    cart: false,
    search: false,
  });

  const menuRef = useRef(null);
  const cartRef = useRef(null);
  const searchRef = useRef(null);

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
  
  return (
    <div className='header'>
    {openModels.menu || openModels.search ? <div className="hide"></div> : null}
      <div className="mobile container">
        <div className="signBtns">
          <NavLink to="/Register">Register</NavLink>
          |
          <NavLink to="/Login">Login</NavLink>
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
      <div className={`top container ${isSticky.header2 ? 'sticky' : ''}`}>
        <div className="logo">
          <FontAwesomeIcon className='menuBar' icon={faBarsStaggered} onClick={() => {
            toggleModel('menu')
          }}/>
          <img src={logo} alt="logo" />
          <h3>Tech<span>Trove</span></h3>
        </div>
        <div ref={searchRef} className={`search ${openModels.search ? 'active' : ''}`}>
          <input type="text" placeholder='Search Here ...'/>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <div className="cards" style={{width: allProducts.length > 3 ? "109%" : "auto"}}>
            {allProducts.map(product => (
              <div className="card" key={product.id}>
                <div className='holder'>
                  <img src={product.img} alt=""/>
                  <div className="info">
                    <NavLink to="product"> 
                      {product.name}
                    </NavLink>
                    <h5 className="type">{product.type} <span style={{background: product.state == 'in stock' ? '#1e9147' : '#ce3636'}} className='state'>{product.state}</span></h5>
                    <p>${product.price}</p>
                  </div>
                </div>
                <IoClose />
              </div>
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
            <button className='favorite'>
              <FavoriteBorderOutlinedIcon />
              <span>3</span>
            </button>
            <button className='cartBtn' onClick={() => {
              toggleModel('cart')
            }}>
            <LocalGroceryStoreOutlinedIcon/>
              <span>8</span>
              <div className={`cart`}>
                <div ref={cartRef} className="main-cart">
                  <div>
                    <div className="item">
                      <h3 className='itemsLeanth'><span className="length">0</span> Items</h3>
                      <NavLink to="/Cart">View Cart</NavLink>
                    </div>
                    <div className="cards" style={{width: allProducts.length > 3 ? "109%" : "auto"}}>
                      {allProducts.map(product => (
                        <div className="card" key={product.id}>
                          <div className='holder'>
                            <img src={product.img} alt=""/>
                            <div className="info">
                              <NavLink to="product"> 
                                {product.name}
                              </NavLink>
                              <h5 className="type">{product.type}</h5>
                              <p>${product.price}</p>
                            </div>
                          </div>
                          <IoClose />
                        </div>
                      ))}
                    </div>
                    <div className="total">
                      <h3>Total Price</h3>
                      <h3 className="cartProductTotal">0</h3>
                    </div>
                    <NavLink to="/checkout" className='Check main-buttom'>Check Out</NavLink>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        
      </div>
        <div className={`bottom ${isSticky.header1 ? 'sticky' : ''}`}>
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
            {type.map((category) => (
          <div className="category" key={category.id}>
            <span onClick={() => toggleActive(category.id)} className={activeCategory === category.id ? 'active' : ''}>
              {category.id}
              {activeCategory === category.id ? <FaAngleUp /> : <FaAngleDown />} {/* Conditionally render arrow icon */}
            </span>
            <ul className={`types ${activeCategory === category.id ? 'active' : ''}`}>
              {category.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
            </div>
            </li>
            <li><HomeOutlinedIcon/> home</li>
            <li><PeopleAltOutlinedIcon/> about us</li>
            <li><MarkEmailUnreadOutlinedIcon/> contact us</li>
            <li><SpeakerNotesOutlinedIcon/> blog</li>
            <li><GrainOutlinedIcon/> special offer</li>
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
