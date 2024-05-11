import '../Css/shop.css'
import React, { useEffect, useState } from 'react';

import { Products, sort } from '../components/products';
import MainCard from '../components/main-card';
import FilterSection from '../components/filterSection';

import ReactPaginate from 'react-paginate';

import { FiGrid } from "react-icons/fi";
import { FaAngleDown, FaList } from 'react-icons/fa';
import { BsSliders2 } from "react-icons/bs";

export default function Shop() {
  localStorage.setItem('page', 'shop')

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















  useEffect (() => {
  const endOffset = itemOffset + productsSort.show;
  setCurrentItems(Products.slice(itemOffset, endOffset));
  setPageCount (Math.ceil(Products.length / productsSort.show));
  }, [itemOffset, productsSort.show, Products]);
  const handlePageClick = (event) => {
  const newOffset = (event.selected * productsSort.show) % Products.length;
  setItemOffset(newOffset);
  window.scrollTo(0, 0);
  };

  return (
    <div className='shop-page'>
      <div className="shop-section container">
          <FilterSection openProductsSort={openProductsSort} toggleProductsSort={toggleProductsSort}/>
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
                      <li key={x} onClick={() => {
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
                      <li key={x} onClick={() => {
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
            {currentItems.map((product, index) => (
              <MainCard key={`${product.id}-${index}`} product={product} details={true}/>
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