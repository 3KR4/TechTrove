import '../Css/about-cart-wishlist-compare.css'
import { useState } from 'react'
import { about } from '../components/products'
import { FaAngleDown } from "react-icons/fa6";

export default function AboutUs() {
  const [aboutActive, setAboutActive] = useState(1)

  return (
    <div className='about-page container'>
      <div className='mapHolder container'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d27628.34438364104!2d31.392415411669926!3d30.049964779134346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAyJzI5LjEiTiAzMcKwMjMnNDYuNyJF!5e0!3m2!1sar!2seg!4v1715094139179!5m2!1sar!2seg&maptype=satellite"
        width="100%" 
        height="100%" 
        loading="lazy"
        style={{border: '0'}}
      />
      </div>
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
