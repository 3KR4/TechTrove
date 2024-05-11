import '../Css/blogs.css'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

import { blogs } from '../components/products'

import { CiViewTimeline } from "react-icons/ci";
import { FaReply } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import BlogsNav from '../components/blogsNav';
import { Link } from 'react-router-dom';

export default function Blogs() {
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect (() => {
    const endOffset = itemOffset + 4;
    setCurrentBlogs(blogs.slice(itemOffset, endOffset));
    setPageCount (Math.ceil(blogs.length / 4));
    }, [itemOffset, 4, blogs]);
    const handlePageClick = (event) => {
    const newOffset = (event.selected * 4) % blogs.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
    };

  return (
    <div className="blog-page container">
      <div className="blogs-holder">
        <div className="main-holder"> 
          {currentBlogs.map((blog) => (
            <div className="card" key={blog.id}>
              <div className="image">
                <img src={blog.img} alt=""/>
              </div>
              <div className="text">
                <p>{blog.type}</p>
                <h3>{blog.title}</h3>
                <p>{blog.details}</p>
                <div className="lastHolder">
                  <Link to={`/blog/${blog.title}`} className="main-buttom">Read More</Link>
                  <p className='time'><CiViewTimeline /> <span> 05th Nov 2023</span></p>
                </div>
              </div>
            </div>
          ))}
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
      </div>
      <BlogsNav />
    </div>
  )
}
