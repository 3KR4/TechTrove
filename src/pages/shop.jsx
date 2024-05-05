import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Products, brands, types, sort } from '../components/products';
import MainCard from '../components/main-card';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import ReactPaginate from 'react-paginate';

import { FiGrid } from "react-icons/fi";
import { FaAngleDown, FaAngleUp, FaList } from 'react-icons/fa';
import { BsSliders2 } from "react-icons/bs";
import { IoClose } from 'react-icons/io5';


export default function Shop() {
  localStorage.setItem('page', 'shop')
  const queryParams = new URLSearchParams(window.location.search);
  const category = queryParams.get('category');
  const type = queryParams.get('type');

  const [activeCategory, setActiveCategory] = useState(category);
  const [cureentCategory, setCureentCategory] = useState(category);
  const [activeLiCat, setActiveLiCat] = useState(type);
  const [slides, setSlides] = useState([]);
  const minDistance = 10;
  const [priceRangevalue, setPriceRangevalue] = useState([10, 100000]);


  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);




  const [openProductsSort, setopenProductsSort] = useState({
    sort: false,
    show: false,
    filter: false,
    list: false,
  });
  const toggleProductsSort = (menu) => {
    setopenProductsSort(prevState => ({
      ...prevState,
      sort: menu === 'sort' ? !prevState['sort'] : false,
      show: menu === 'show' ? !prevState['show'] : false,
      filter: menu === 'filter' ? !prevState['filter'] : false,
      list: menu === 'list' ? !prevState['list'] : prevState['list'],
    }));
  };
  const handleViewClick = (value) => {
    setopenProductsSort({ ...openProductsSort, list: value });
  };

  const [productsSort, setProductsSort] = useState({
    sort: 'default',
    show: 12,
  });
  const handleShowChange = (key, value) => {
    setProductsSort(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const [scrollFilterY, setScrollFilterY] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);

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


  const specifications = types.find(type => type.id === cureentCategory)?.list?.find(x => x.id === activeLiCat)?.specific;
  let currentBrands = activeLiCat ? brands.filter(brand => brand.produce.includes(activeLiCat)) : brands;

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
    for (let i = 0; i < currentBrands.length; i += chunkSize) {
      tempSlides.push(currentBrands.slice(i, i + chunkSize));
    }
    setSlides(tempSlides);
  }, [activeLiCat]);





  useEffect (() => {
  const endOffset = itemOffset + productsSort.show;
  setCurrentItems(Products.slice(itemOffset, endOffset));
  setPageCount (Math.ceil(Products.length / productsSort.show));
  }, [itemOffset, productsSort.show, Products]);
  const handlePageClick = (event) => {
  const newOffset = (event.selected * productsSort.show) % Products.length;
  setItemOffset(newOffset);
  };

  return (
    <div className='shop-page'>
      <div className="shop-section container">
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
        <div className="products-section">
          <div className="btns">
            <div>
              <div className="mobileFilterBtn" onClick={() =>
                  toggleProductsSort('filter') 
                }>
                Filter Menu
                <BsSliders2 />
              </div>
              <div>
                <div className="puttons" onClick={() =>
                    toggleProductsSort('sort') 
                  }>
                  <h4>Sort by:</h4> 
                    <span>{productsSort.sort} <FaAngleDown className={openProductsSort.sort && 'open'}/></span>
                  <ul className={`select ${openProductsSort.sort? 'active' : ''}`}>
                    {sort[0].map((x) => (
                      <li onClick={() => {
                        handleShowChange('sort', x);
                      }} value={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div className="puttons" onClick={() =>
                    toggleProductsSort('show') 
                  }>
                  <h4>Show:</h4> 
                    <span>{productsSort.show} Products <FaAngleDown className={openProductsSort.show && 'open'}/></span>
                  <ul className={`select ${openProductsSort.show? 'active' : ''}`}>
                    {sort[1].map((x) => (
                      <li onClick={() => {
                        handleShowChange('show', x);
                      }} value={x}>{x} Product</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="grids">
              <FiGrid onClick={() => handleViewClick(false)} className={!openProductsSort.list && 'active'} />
              <FaList onClick={() => handleViewClick(true)} className={openProductsSort.list && 'active'} /> 
            </div>
          </div>
          <div className={`products-holder ${openProductsSort.list && 'list'}`}>
            {currentItems.map((product) => (
              <MainCard product={product} details={true}/>
            ))}
          </div>
        </div>
      </div>
        <div className="paginationHolder">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< prev"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
          />
        </div>
        <div className="panner container">
          <img src={require('../img/panner2.png')} alt="" />
        </div>
    </div>
  )
}