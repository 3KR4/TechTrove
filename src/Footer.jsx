import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material';
// @ts-ignore
import logo from './img/logo.png'
import { NavLink } from 'react-router-dom';
import { type, Products } from './components/products';


import { PiClockCountdownFill } from "react-icons/pi";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

export default function Footer() {

  return (
    <div className='footer'>
      <div className="container">
        <div className="top-footer">
            <a className="logo" href="index.html">
              <i className="bi bi-basket"></i>
              Shop
              <span>Grids</span> 
            </a>
            <div className="holder">
              <div className="Subscribe ">
                <h4>Subscribe to our Newsletter</h4>
                <p>Get all the latest information, Sales and Offers.</p>
            </div>
            <div className="input">
                <input name="EMAIL" placeholder="Email address here..." type="email"/>
                <button className="main-buttom">Subscribe<span className="dir-part"></span></button>
            </div>
            </div>

        </div>
        <div className="middle-footer">
          <div className="with-us">
            <h1>Get In Touch With Us</h1>
            <li>
              <FaLocationDot style={{fontSize: '20px'}}/>
              <h3>2091 nasr city / cairo</h3>
            </li>
            <li>
              <FaPhoneVolume />
              <h3>Phone: +201150865211</h3>
            </li>
            <li>
              <PiClockCountdownFill style={{fontSize: '25px', marginLeft: '-3px'}}/>
              <h3>Open Time: <br/>
                10.00 am - 6.00 pm
              </h3>
            </li>
              <li><IoIosMailUnread style={{fontSize: '25px'}}/> <h3>support@shopgrids.com</h3></li>
          </div>
          <div className="another">
            <h1>Information</h1>
            <ul>
              <a href=""><li>About Us</li></a>
              <a href=""><li>Contact Us</li></a>
              <a href=""><li>Downloads</li></a>
            </ul>
          </div>
          <div className="another">
            <h1>Information</h1>
            <ul>
              <a href=""><li>About Us</li></a>
              <a href=""><li>Contact Us</li></a>
              <a href=""><li>Downloads</li></a>
              <a href=""><li>Sitemap</li></a>
              <a href=""><li>FAQs Page</li></a>
            </ul>
          </div>
          <div className="another">
            <h1>Shop Departments</h1>
            <ul>
              <a href=""><li>Computers & Accessories</li></a>
              <a href=""><li>Smartphones & Tablets</li></a>
              <a href=""><li>TV, Video & Audio</li></a>
              <a href=""><li>Cameras, Photo & Video</li></a>
              <a href=""><li>Headphones</li></a>
            </ul>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="visa">
            <h3>We Accept:</h3>
            <img src="img/credit-cards-footer.png" alt=""/>
          </div>
          <h3>Designed and Developed byGrayGrids</h3>
          <div className="follow">
            <h3>Follow Us:</h3> 
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-twitter"></i></a>
            <a href=""><i className="bi bi-messenger"></i></a>
            <a href=""><i className="bi bi-discord discord"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
