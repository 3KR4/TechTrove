import React from 'react'
import { useState } from 'react'
import { Products } from '../components/products'
import MainCard from './main-card';
import genrateProductSwiper from './genrateProductSwiper';


export default function FeaturedProduct() {

  const [activeFilter, setActiveFilter] = useState("New Arrive");

  const filterSectionLi = [
    "New Arrive",
    "Featured",
    "Best Sales",
    "Cooming Soon",
  ]

  let renderProduct = Products.filter((x) => x.category == 'hardware')
  
  if (activeFilter == 'Featured') {
    renderProduct = Products.filter((x) => x.category == 'accessories')
  } else if (activeFilter == 'Best Sales') {
    renderProduct = Products.filter((x) => x.category == 'monitor')
  } else if (activeFilter == 'Cooming Soon') {
    renderProduct = Products.filter((x) => x.category == 'other')
  } else {
    renderProduct = Products.filter((x) => x.category == 'hardware')
  }



  return (
    <div className="products">
      <ul className='sectionFilter'>
        {filterSectionLi.map((x, index) => (
          <li key={index} className={activeFilter === x ? "active" : ''}
            onClick={() => {
              setActiveFilter(x);
            }}>{x}
          </li>
        ))}
      </ul>
      <div className="container">
        {genrateProductSwiper(Products)}
      </div>
    </div>
  )
}
