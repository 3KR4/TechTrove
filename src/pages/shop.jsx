import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Slider from '@mui/material/Slider';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { Products, brands, types } from '../components/products';
import MainCard from '../components/main-card';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function Shop() {
  const queryParams = new URLSearchParams(window.location.search);
  const category = queryParams.get('category');
  const type = queryParams.get('type');

  const [activeCategory, setActiveCategory] = useState(category);
  const [activeLiCat, setActiveLiCat] = useState(type);
  const [slides, setSlides] = useState([]);
  const minDistance = 10;
  const [priceRangevalue, setPriceRangevalue] = useState([10, 100000]);

  const specifications = types.find(type => type.id === activeCategory)?.list?.find(x => x.id === activeLiCat)?.specific || [];






  const toggleActive = (categoryId) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId);
  };
const handlePriceRangeChange = (event, newValue, activeThumb) => {
  if (!Array.isArray(newValue)) {
    return;
  }

  if (newValue[1] - newValue[0] < minDistance) {
    if (activeThumb === 0) {
      const clamped = Math.min(newValue[0], 100000 - minDistance);
      setPriceRangevalue([clamped, Math.min(clamped + minDistance, 100000)]);
    } else {
      const clamped = Math.max(newValue[1], minDistance);
      setPriceRangevalue([Math.max(clamped - minDistance, 0), clamped]);
    }
  } else {
    setPriceRangevalue(newValue);
  }
};
useEffect(() => {
  const tempSlides = [];
  const chunkSize = 6;
  for (let i = 0; i < brands.length; i += chunkSize) {
    tempSlides.push(brands.slice(i, i + chunkSize));
  }
  setSlides(tempSlides);
}, [brands]);


  return (
    <div className='shop-page'>
      <div className="shop-section container">
        <div className="filter-section">
          <div className="fixed">
            <div className="categoryFilter">
            <h4>Filter By categories</h4>
              {types.map((category) => (
                <div className="category" key={category.id}>
                  <span onClick={() => toggleActive(category.id)} className={activeCategory === category.id ? 'active' : ''}>
                    {category.id}
                    {activeCategory === category.id ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                  <ul className={`types ${activeCategory === category.id ? 'active' : ''}`}>
                    {category.list.map((item) => (
                      <li key={item.id} className={activeLiCat == item.id ? 'active' : ''} onClick={() => {
                        setActiveLiCat(item.id)
                      }}>{item.id}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="availability-filter">
                <h4>Availability</h4>
                <ul>
                    <li>
                      <input type="checkbox" className="ui-checkbox"/>
                      In Stock
                    </li>
                    <li>
                      <input type="checkbox" className="ui-checkbox"/>
                      Out Of Stock
                    </li>
                </ul>
              </div>
              <div className="price-Filter-Holder">
                <h4>Filter By Price</h4>
                <p>enter min and max price</p>
                <div className="price-input">
                  <div className="field">
                    <span>Min</span>
                    <h3>{priceRangevalue[0]}</h3>
                  </div>
                  <div className="separator">-</div>
                  <div className="field">
                    <h3>{priceRangevalue[1]}</h3>
                    <span>Max</span>
                  </div>
                </div>
                <Slider
                  className='priceSlider'
                  getAriaLabel={() => 'Minimum distance shift'}
                  value={priceRangevalue}
                  onChange={handlePriceRangeChange}
                  min={10}
                  max={10000}
                />
              </div>

              <div className="brand-Filter-Holder">
                <h4>Filter By Brands</h4>
                <div className="brands-holder">
                  <Swiper
                    className='swiper'
                    pagination={{
                      dynamicBullets: true,
                      clickable: true,
                    }}
                    speed={1000}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                  >
                    {slides.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div className="brands-holder">
                          {slide.map((brand) => (
                            <div className="imgHolder" key={brand.id}>
                              <span>{brand.id}</span>
                              <img src={brand.img} alt={brand.id} />
                            </div>
                          ))}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
                {activeLiCat && (
                  <>
                    {Object.entries(specifications).map(([key, values]) => (
                      <div className="specifications-filter" key={key}>
                        <h4>{key}</h4>
                        <ul>
                          {values.map((spec, idx) => (
                            <li key={`${key}_${idx}`}>
                              <input type="checkbox" className="ui-checkbox"/>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                )}
          </div>
        </div>
        <div className="products-section">
          <div className="btns-nav">


          </div>
          <div className="products-holder">
            {Products.map((product) => (
              <MainCard product={product}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}