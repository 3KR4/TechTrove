import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import errorLight from '../img/404-light.png'; 
import errorDark from '../img/404-dark.png'; 

export default function Error404() {
  const [isLightTheme, setIsLightTheme] = useState(true);


  useEffect(() => {
    const handleBodyClassChange = () => {
      setIsLightTheme(document.body.classList.contains('light'));
    };

    handleBodyClassChange(); // Update state initially

    // Listen for changes in body class
    document.body.addEventListener('transitionend', handleBodyClassChange);

    // Clean up event listener
    return () => {
      document.body.removeEventListener('transitionend', handleBodyClassChange);
    };
  }, []);

  return (
    <div className='error-page'>
      <h1>404</h1>
      <img src={errorLight} alt="" />

      <Link to='./' className='main-buttom'>Back To Home</Link>
    </div>
  );
}
