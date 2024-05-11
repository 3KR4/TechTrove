import '../Css/blogs.css'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

import { blogs, Products } from '../components/products'
import { FaReply } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import BlogsNav from '../components/blogsNav';
import { useParams } from 'react-router-dom';

export default function BlogsSingle() {
  const { blogName } = useParams();
  const currentSingle = blogs.find(x => x.title == blogName)

  return (
    <div className="blog-page container">
        <div className="blogSingle">
          <img src={currentSingle.img} alt=""/>
          <div className="bigBigHolder">
            <div className="holder">
              <h3>{currentSingle.title}</h3>
              <p className="bigP">
                {currentSingle.details}
              </p>
              <ul className="SecondUl">
                <li><GoDotFill /> For those of you who are serious about having more.</li>
                <li><GoDotFill /> There are a million distractions in every facet of our lives.</li>
                <li><GoDotFill /> The sad thing is the majority of people have no clue about what they truly want.</li>
                <li><GoDotFill /> Once you have a clear understanding of what you want</li>
                <li><GoDotFill /> Focus is having the unwavering attention to complete what you set out to do.</li>
              </ul>

                <h3>Don't demand that things happen as you wish.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <div className="ReviewS">
                <h1>Comments</h1>
                {Products[0].testimonies.map((x) => (
                  <div key={x.id} className="card">
                    <button className="replay"><FaReply /> Reply</button>
                    <h3>
                      {x.name.split(' ').length === 1 ? x.name.substring(0, 2)
                      : `${x.name.split(' ')[0][0]}${x.name.split(' ')[1][0]}`}
                    </h3>
                    <div className="text">
                      <h3>{x.name}</h3>         
                      <p>{x.details}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      <BlogsNav />
    </div>
  )
}
