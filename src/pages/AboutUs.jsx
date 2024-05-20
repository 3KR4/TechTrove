import React, { useState } from 'react'
import { about } from '../components/products'

import { FaAngleDown } from "react-icons/fa6";

export default function AboutUs() {
  const [aboutActive, setAboutActive] = useState(1)

  return (
    <div className='about-page container'>
      <img src={require('../img/about.jpg')} alt="" />
      <div className="aboutHolder">
      {about.map((x) => (
        <div className={`card ${aboutActive === x.id ? 'active' : ''}`} key={x.id}>
          <h3 onClick={() => setAboutActive(x.id)}>{x.head} <FaAngleDown/></h3>
          <div className='details'>
            {x.bodys.map((body, index) => (
              <p key={index}>{body}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
