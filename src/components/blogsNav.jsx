import React from 'react'
import { FaSearch } from "react-icons/fa";
import { blogs } from '../components/products'
import { CiViewTimeline } from "react-icons/ci";

export default function BlogsNav() {
  return (
  <div className="nav-section">
    <div className="search">
      <h4>Search This Site</h4>
      <form action="">
        <input type="text" name="" id="" placeholder="Search Here..."/>
        <button><FaSearch /></button>
      </form>
    </div>
    <hr />
    <div>
      <h4>Featured Posts</h4>
        <div className="holder">
          {blogs.slice(0, 3).map((x) => (
            <div className="box">
              <div className="image">
                <img src={x.img} alt=""/>
              </div>
              <div className="info-image">
                <h4>{x.title}</h4>
                <p className='time'><CiViewTimeline /> <span> 05th Nov 2023</span></p>
              </div>
            </div>
          ))}
        </div>
    </div>
    <hr />
    <div>
      <h4>Popular Tags</h4>
      <div className="tags">
        <a href="#">#Electronics</a>
        <a href="#">#Cpu</a>
        <a href="#">#Gadgets</a>
        <a href="#">#Wearables</a>
        <a href="#">#Wearables</a>
      </div>
    </div>
  </div>
  )
}
