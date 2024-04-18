import { useTheme } from '@mui/material';
import { FaAngleDown, } from 'react-icons/fa';


import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import {type, brands} from '../components/products'

import Swiper from 'swiper';
import 'swiper/css';



export default function Home() {
  const theme = useTheme()

  const [landingSwiper, setlandingSwiper] = useState(null);
  const landingSwiperRef = useRef(null);

  const [brandsSwiper, setBrandsSwiper] = useState(null);
  const brandsSwiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const initialHoverImages = type.map((item) => item.list[0].img);
  const [hoverImages, setHoverImages] = useState(initialHoverImages);
  const [timer, setTimer] = useState(null);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  let brandsLength = brands.length / 2



  let brands1 = []
  let brands2 = []


  for(let i =0; i < brandsLength; i++ ) {
    brands1.push(brands[i])
  }

  for(let i = Math.ceil(brandsLength); i <= brands.length - 1; i++ ) {
    brands2.push(brands[i])
  }
  

  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 992px)'); // Adjust the breakpoint as needed
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);




  useEffect(() => {
    const swiper = new Swiper(landingSwiperRef.current, {
      slidesPerView: 1, 
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: true,
      },
      loop: true,
    });
    
    setlandingSwiper(swiper);

    return () => {
      // Destroy Swiper instance when component unmounts
      swiper.destroy();
    };
  }, []);
  useEffect(() => {
    if (landingSwiper) {
      landingSwiper.on('slideChange', () => {
        const realIndex = landingSwiper.realIndex;
        const numSlides = landingSwiper.slides.length;
        setActiveIndex(realIndex < 0 ? numSlides - 1 : realIndex % numSlides);
      });
    }
  }, [landingSwiper]);
  
  const handlePaginationClick = (index) => {
    const adjustedIndex = landingSwiper > 2 ? index - 1 : index;
    if (adjustedIndex >= 0) {
      if (landingSwiper) {
        landingSwiper.slideTo(adjustedIndex);
      }
      setActiveIndex(adjustedIndex);
    }
  };

  const handleHover = (index, img) => {
    const newHoverImages = [...hoverImages];
    newHoverImages[index] = img;
    setHoverImages(newHoverImages);
  };

  const handleMouseLeave = (index) => {
    if (timer) {
      clearTimeout(timer); // Clear any existing timer
    }
    const newTimer = setTimeout(() => {
      setHoverImages(prevHoverImages => {
        const newHoverImages = [...prevHoverImages];
        newHoverImages[index] = initialHoverImages[index];
        return newHoverImages;
      });
    }, 1500);
    setTimer(newTimer);
  };


  const generateSwiperContainer = (brandsInfo) => {
    return (
      <div className="holder">
        <div className="swiper-container">
          {brandsInfo.map((x) => (
            <div className="swiper-slide" key={x.id}>
              <img src={x.img} alt="" />
              <h4>{x.id}</h4>
            </div>
          ))}
        </div>
        <div className="swiper-container">
          {brandsInfo.map((x) => (
            <div className="swiper-slide" key={x.id}>
              <img src={x.img} alt="" />
              <h4>{x.id}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
    <div className='landing'>
      <div className="swiper-container" ref={landingSwiperRef}>
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
          {[...Array(landingSwiper?.slides.length || 0)].map((_, index) => (
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
        <h3>Shop By Categories</h3>
        <p>You have the option to browse through all products' categories or select a specific type</p>
      </div>
      <div className="container">
        {type.map((item, index) => {
          if (isSmallScreen) {
            return (
              <div className="card" key={index} onMouseEnter={() => handleHover(index, item.list[0].img)} onMouseLeave={() => handleMouseLeave(index)}>
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
                <img src={hoverImages[index]} alt="" />
              </div>
            );
          } else if (index % 2 === 0 && type[index + 1]) {
            return (
              <div className="pair-wrapper" key={index}>
                <div className="card" onMouseEnter={() => handleHover(index, item.list[0].img)} onMouseLeave={() => handleMouseLeave(index)}>
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
                  <img src={hoverImages[index]} alt="" />
                </div>

                <div className="card" onMouseEnter={() => handleHover(index + 1, type[index + 1].list[0].img)} onMouseLeave={() => handleMouseLeave(index + 1)}>
                  <div>
                    <h4>{type[index + 1].id}</h4>
                    <ul>
                      {type[index + 1].list.map((x, idx) => (
                        <li key={idx} onMouseEnter={() => handleHover(index + 1, x.img)}>
                          <a href="shop.html">{x.id}</a>
                        </li>
                      ))}
                      <li><a href="shop.html">See All</a></li>
                    </ul>
                  </div>
                  <img src={hoverImages[index + 1]} alt="" />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
    <div className="brands">
      {generateSwiperContainer(brands1)}
      <h4 className="title">All Brands</h4>
      {generateSwiperContainer(brands2)}
    </div>
    </>
  )
}