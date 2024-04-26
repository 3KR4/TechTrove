import { useTheme } from '@mui/material';
import { FaAngleDown, } from 'react-icons/fa';


import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Products, type, brands, bundles} from '../components/products'

import { salePrice, under10Nums } from '../Methods.jsx'
import Rating from '@mui/material/Rating';
import { IoCart } from "react-icons/io5";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import CountdownTimer from '../components/CountDown'

import FeaturedProduct from '../components/featuredProduct';
import MainCard from '../components/main-card';


export default function Home() {

  const [landingSwiper, setlandingSwiper] = useState(null);
  const landingSwiperRef = useRef(null);

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
  
  let Bundles = bundles.filter(x => x.view == true)
  
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




  const endTime = new Date('2024-04-26T00:00:00');

  const x = new Date();

  console.log(x);

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
        <Swiper className="swiper-container"
          loop={true}
          speed={1150}
          breakpoints={{
            320: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 8,
            },
            1024: {
              slidesPerView: 14,
            },
          }}
        >
          {brandsInfo.map((x) => (
            <SwiperSlide className="swiper-slide" key={x.id}>
              <img src={x.img} alt="" />
              <h4>{x.id}</h4>
            </SwiperSlide>
          ))}
          {brandsInfo.map((x) => (
            <SwiperSlide className="swiper-slide" key={x.id}>
              <img src={x.img} alt="" />
              <h4>{x.id}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };


  return (
    <>
    <div className='landing'>
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      loop={true}
      speed={1150}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      <SwiperSlide className="swiper-slide">
        <img src={ require(
          // @ts-ignore
          '../img/swiper1.png') } alt="" />
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
        <img src={require(
          // @ts-ignore
          '../img/swiper2.png')} alt="" />
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
        <img src={require(
          // @ts-ignore
          '../img/swiper3.png')} alt="" />
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
        <img src={require(
          // @ts-ignore
          '../img/swiper4.png')} alt="" />
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
        <img src={require(
          // @ts-ignore
          '../img/swiper5.png')} alt="" />
      </SwiperSlide>

      <SwiperSlide className="swiper-slide">
        <img src={require(
          // @ts-ignore
          '../img/swiper6.png')} alt="" />
      </SwiperSlide>
    </Swiper>
    
        <div className="swiper-pagination">
          {/* Render pagination buttons based on the number of slides */}
          {[...Array(landingSwiper?.slides.length || 0)].map((_, index) => (
            <button
              key={index}
              className={index === activeIndex ? 'active' : ''}
            >
            </button>
          ))}
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
    <div className="offer">
    <div className="main-title">
      <h3>Special Offer</h3>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
    </div>
    <div className="container">
      <div className="bigHolder">
        <div className="products">
        {Products.slice(0, 6).map((product) => (
          <MainCard  product={product}/>
        ))}

        </div>
      </div>
      <div className="saleHolder">
        <h4 className="sectionTitleSale">Hot Bundles</h4>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          slidesPerView={1}
          speed={1150}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {Bundles.map((X) => (
            endTime > x  && (
              <SwiperSlide className="sale">
              <div className="image">
                <img src={X.Images[0]} alt=""/>
              </div>
              <h3>{X.type} {X.category}            
                <span className="hot">HOT</span>
              </h3>
              <div className="review">
                <div className="stars">
                  <Rating
                    defaultValue={X.stars}
                    precision={X.stars % 1 <= 0.7 ? 0.5 : 1}
                    sx={{ fontSize: '20px', color: '#d3ab3f' }} // Use an object to define CSS properties
                    readOnly
                  />
                </div>
                <p>{X.reviews} Review</p>
              </div>
              <span className='price'>{salePrice(X)} <p>${X.price}</p> <p className='saleNum'>-{under10Nums(X.sale)}% OFF</p></span>
              <p className='details'>Intel I5 14400F - RTX 4070 12GB - PRO-H510M-B-ARKTEK - 16GB DDR4 2666 mhz - C800A 256GB-XIGMATEK - CASE HERO II AIR Z 4 Fan-POWER II - Z750 500W PSU</p>
              <h2>The offer will expire on OCtoper <br/> 30th</h2>
              <CountdownTimer targetDate={endTime} />
              <a className="main-buttom" href="shop.html">Get It Now</a>
            </SwiperSlide>
            )
          ))}
        </Swiper>
      </div>
    </div>
  </div>
  <FeaturedProduct />
    <div className="brands">
      {generateSwiperContainer(brands1)}
      <h4 className="sectionTitle">All Brands</h4>
      {generateSwiperContainer(brands2)}
    </div>
    </>
  )
}