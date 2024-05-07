import React, { useEffect, useRef, useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import { IoClose } from 'react-icons/io5';
import { Products, brands, types, sort } from '../components/products';
import { FaAngleDown } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export default function FilterSection ({openProductsSort, toggleProductsSort}) {

  const queryParams = new URLSearchParams(window.location.search);
  const category = queryParams.get('category');
  const type = queryParams.get('type');
  const [slides, setSlides] = useState([]);
  const [priceRangevalue, setPriceRangevalue] = useState([10, 100000]);
  const [scrollFilterY, setScrollFilterY] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [activeCategory, setActiveCategory] = useState(category);
  const [cureentCategory, setCureentCategory] = useState(category);
  const [activeLiCat, setActiveLiCat] = useState(type);
  const minDistance = 10;

  const specifications = types.find(type => type.id === cureentCategory)?.list?.find(x => x.id === activeLiCat)?.specific;
  let currentBrands = activeLiCat ? brands.filter(brand => brand.produce.includes(activeLiCat)) : brands;

  const toggleActive = (categoryId) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollFilterY(window.scrollY);
      let paginationHolder = document.querySelector(".paginationHolder");
      if (paginationHolder) {
        setReachedEnd(window.scrollY > paginationHolder.offsetTop - 800);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    for (let i = 0; i < currentBrands.length; i += chunkSize) {
      tempSlides.push(currentBrands.slice(i, i + chunkSize));
    }
    setSlides(tempSlides);
  }, [activeLiCat]);


    return(
        <div className={`filter-section ${scrollFilterY > 105 ? reachedEnd ? 'stop' : 'move': ''} ${openProductsSort.filter && 'active'}`}>
        <div className="fixed">
          <div className="topText">
            Filter Menu 
            <IoClose onClick={() =>
                toggleProductsSort('filter') 
              }/>
          </div>
          <div className="categoryFilter">
          <h4>Filter By categories</h4>
            {types.map((category) => (
              <div className="category" key={category.id}>
                <span onClick={() => toggleActive(category.id)} className={activeCategory === category.id ? 'active' : ''}>
                  {category.id}
                  <FaAngleDown className={activeCategory === category.id && 'open'}/>
                </span>
                <ul className={`types ${activeCategory === category.id ? 'active' : ''}`}>
                  {category.list.map((item) => (
                    <li key={item.id} className={activeLiCat == item.id ? 'active' : ''} onClick={() => {
                      setActiveLiCat(item.id)
                      setCureentCategory(category.id);
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
    )
}