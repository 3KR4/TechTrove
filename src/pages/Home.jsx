import { useTheme } from '@mui/material';
import { FaAngleDown, } from 'react-icons/fa';


import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import {type} from '../components/products'

import Swiper from 'swiper';
import 'swiper/css';





export default function Home() {
  const theme = useTheme()

  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [curentIndex, setCurrentIndex] = useState(0);
  const initialHoverImages = type.map((item) => item.list[0].img);
  const [hoverimages, setHoverimages] = useState(initialHoverImages);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on('slideChange', () => {
        const realIndex = swiperInstance.realIndex;
        const numSlides = swiperInstance.slides.length;
        setActiveIndex(realIndex < 0 ? numSlides - 1 : realIndex % numSlides);
      });
    }
  }, [swiperInstance]);
  
  useEffect(() => {
    // Initialize Swiper when component mounts
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 1, // Show one div at a time
      pagination: {
        el: '.swiper-pagination', // Pagination container
        clickable: true, // Enable clickable pagination
      },
      autoplay: {
        delay: 1000,
      },
      loop: true,
    });
    
    setSwiperInstance(swiper);

    return () => {
      // Destroy Swiper instance when component unmounts
      swiper.destroy();
    };
  }, []);

  const handlePaginationClick = (index) => {
    const adjustedIndex = curentIndex > 2 ? index - 1 : index;
    if (adjustedIndex >= 0) {
      if (swiperInstance) {
        swiperInstance.slideTo(adjustedIndex);
      }
      setActiveIndex(adjustedIndex);
    }
  };


  const handleHover = (index, img) => {
    const newHoverImages = [...hoverimages];
    newHoverImages[index] = img;
    setHoverimages(newHoverImages);
  };
  
  return (
    <>
    <div className='landing'>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <img src={ require(
              // @ts-ignore
              '../img/swiper1.png') } alt="" />
          </div>

          <div className="swiper-slide">
            <img src={require(
              // @ts-ignore
              '../img/swiper2.png')} alt="" />
          </div>

          <div className="swiper-slide">
            <img src={require(
              // @ts-ignore
              '../img/swiper3.png')} alt="" />
          </div>

          <div className="swiper-slide">
            <img src={require(
              // @ts-ignore
              '../img/swiper4.png')} alt="" />
          </div>

          <div className="swiper-slide">
            <img src={require(
              // @ts-ignore
              '../img/swiper5.png')} alt="" />
          </div>

          <div className="swiper-slide">
            <img src={require(
              // @ts-ignore
              '../img/swiper6.png')} alt="" />
          </div>

        </div>
        <div className="swiper-pagination">
          {/* Render pagination buttons based on the number of slides */}
          {[...Array(swiperInstance?.slides.length || 0)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={index === activeIndex ? 'active' : ''}
            >
            </button>
          ))}
        </div>
    </div>
    <div className="second_section">
      <div className="images">
        <img src={require(
          // @ts-ignore
          '../img/landing01.jpg')} alt="" />
      </div>
      <div className="images">
        <img src={require(
          // @ts-ignore
          '../img/landing02.jpg')} alt="" />
      </div>
      <div className="images">
        <img src={require(
          // @ts-ignore
          '../img/landing03.jpg')} alt="" />
      </div>
      <div className="images">
        <img src={require(
// @ts-ignore
        '../img/landing04.jpg')} alt="" />
      </div>
    </div>
    </div>
    <div className="categories">
      <div className="main-title">
        <h3>SHOP BY CATEGORIES</h3>
        <h3>Shop By Categories</h3>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
      </div>
      <div className="container">
        {type.map((item , index) => (
          <div className="card">
            <div>
              <h4>{item.id}</h4>
              <ul>
                {item.list.map((x, idx) => (
                  <li key={idx} onMouseEnter={() => handleHover(index, x.img)}>
                    <a href="shop.html">{x.id}</a>
                  </li>
                ))}
                <li><a href="shop.html">See All</a></li>
              </ul>
            </div>
            <img src={hoverimages[index]} alt="" />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}








