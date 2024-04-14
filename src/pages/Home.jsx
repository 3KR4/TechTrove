import { useTheme } from '@mui/material';
import { FaAngleDown, } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import Swiper from 'swiper';
import 'swiper/css';

// @ts-ignore
import swipimg1 from '../img/broker-giving-keys.jpg'
// @ts-ignore
import swipimg2 from '../img/portrait-woman-customer-service-worker.jpg'
// @ts-ignore
import swipimg3 from '../img/customer-service-cute-brunette-guy-office-suit-with-computer-headset-saying-bye.jpg'






export default function Home() {
  const theme = useTheme()

  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on('slideChange', () => {
        const realIndex = swiperInstance.realIndex;
        const numSlides = swiperInstance.slides.length;
        setActiveIndex(realIndex < 0 ? numSlides - 1 : realIndex % numSlides);
        console.log(swiperInstance.params.loop);
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
  const adjustedIndex = swiperInstance.params.loop ? index - 1 : index;
  if (adjustedIndex >= 0) {
    if (swiperInstance) {
      swiperInstance.slideTo(adjustedIndex);
    }
    setActiveIndex(adjustedIndex);
  }
};




  return (
    <>
    <div className='landing'>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <img src={swipimg1} alt="" />
          </div>

          <div className="swiper-slide">
            <img src={swipimg2} alt="" />
          </div>

          <div className="swiper-slide">
            <img src={swipimg3} alt="" />
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
    </div>
    </>
  )
}








