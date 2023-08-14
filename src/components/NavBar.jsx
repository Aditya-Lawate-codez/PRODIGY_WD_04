import React from 'react';
import HomePage from './HomePage';
import Contact from './Contact';
import Certificates from './Certificates';

import AboutPage from './AboutPage';

import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import { useState } from 'react'
import  styles from './Navbar.module.css';



function Navbar() {


  // adding the states 
  const [isActive, setIsActive] = useState(false);


  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };


  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }


  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:'black'}}>
<div className={`${styles.lmao}`}>
      <BrowserRouter>  

        <nav className={`${styles.navbar}`}>


          {/* logo */}
          <Link to='/' className={`${styles.logo}`}>
            <b>
              Woah.io
            </b>
            </Link>


          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
               <Link to='/' className={`${styles.navList}`}>Home</Link> 
            </li>
            <li onClick={removeActive}>
               <Link to='/about' className={`${styles.navList}`}>About</Link> 
            </li>
            <li onClick={removeActive}>
               <Link to='/Certificates' className={`${styles.navList}`}>Certificates</Link> 
            </li>
            <li onClick={removeActive}>
               <Link to='/contact' className={`${styles.navList}`}>Contact</Link> 
            </li>
          </ul>


          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
        <Routes>
		<Route path="/" element={<HomePage />} />
             		<Route path="/about" element={<AboutPage />} />
             		<Route path="/Certificates" element={<Certificates />} />
             		<Route path="/contact" element={<Contact />} />

           		</Routes>
      </BrowserRouter>
      </div>
      </header>
    </div>
  );
}


export default Navbar;

