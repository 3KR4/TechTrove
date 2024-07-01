import * as React from 'react';
import { useState } from 'react';
import { FaAnglesUp } from "react-icons/fa6";

export default function ScrollBotton() {

  const [isVisible, setIsVisible] = useState(false);
  function handleScroll() {
    if (window.scrollY >= 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  window.addEventListener('scroll', handleScroll);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button onClick={scrollToTop} className={`scrollBtn ${isVisible ? 'show' : ''}`}><FaAnglesUp/></button>
  )
}
