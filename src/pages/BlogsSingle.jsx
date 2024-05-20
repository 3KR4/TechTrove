import '../Css/blogs.css'
import React, { useEffect, useState } from 'react'

import { blogs, Products } from '../components/products'
import { GoDotFill } from "react-icons/go";
import { useParams } from 'react-router-dom';

import BlogsNav from '../components/blogsNav';
import Reviews from '../components/reviews';

export default function BlogsSingle() {
  const { blogName } = useParams();
  const currentSingle = blogs.find(x => x.id == +blogName)

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
              <Reviews currentSingle={currentSingle}/>
          </div>
        </div>
        {window.innerWidth > 1000 && (
          <BlogsNav />
        )}
    </div>
  )
}