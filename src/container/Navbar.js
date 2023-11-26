import React from 'react'
import './Navbar.css'
import { ReactComponent as Sun } from "../assests/Sun.svg";
import { ReactComponent as Moon } from "../assests/Moon.svg";
import { useRef } from 'react';
import {  FaTimes, FaBars } from "react-icons/fa";
import {  FcFactory, FcHome,  FcKey,   FcSurvey } from "react-icons/fc";
import img from "../assests/WhatsApp_Image_2023-10-27_at_7.38.32_PM-removebg-preview.png"
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle(
        "respon-nav"
      );
    };
  
    // 
  
    const setDarkMode = () => {
      document.querySelector("body").setAttribute('date-theme', 'dark')
      localStorage.setItem("selectedTheme", "dark")
    };
  
    const setLightMode = () => {
      document.querySelector("body").setAttribute('date-theme', 'light')
      localStorage.setItem("selectedTheme", "light")
    };
  
  
  
    const toggleTheme = e => {
      if (e.target.checked) setDarkMode();
      else setLightMode()
    };


  return (
    <header>
  
  <a href='/' className='game'><img src={img}></img></a>
 


  <div className='dark_modes'>
      <input
        className='dark_mode_inputs'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
      />
      <label className='dark_mode_labels' for='darkmode-toggle'>
        <Sun />
        <Moon />
      </label>
    </div>



    <nav ref={navRef}>
  <a href='/' className='gam'><img src={img}></img></a>



    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
      />
      <label className='dark_mode_label' for='darkmode-toggle'>
        <Sun />
        <Moon />
      </label>
    </div>

  
      <a className='a' href='/'> <FcHome /> صفحه الرئيسيه</a>
      <a className='a' href='/Hometwo'> <FcKey /> بيوت وشقق</a>
      <a className='a' href='/Homethree'> <FcFactory /> مصانع و مكاتب</a>
      <a className='a' href='/Homefour'> <FcSurvey />تسجيل الدخول</a>

      <div>
   <a className='awr' href='https://wa.me/qr/YQGERDIAOZ46K1' target="_blank"><IoLogoWhatsapp/></a>
  
  <a className='afr' href='https://www.facebook.com/elshik3qrat?mibextid=ZbWKwL' target="_blank"><IoLogoFacebook/></a>
   
  <a className='aer' href='' target="_blank"><AiOutlineMail/></a>
  </div>
      <button
        className='nav-btn nav-close-btn'
        onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
    <button 
      className='nav-btn'
      onClick={showNavbar}>
      <FaBars />
    </button>

   <a className='aw' href='https://wa.me/qr/YQGERDIAOZ46K1' target="_blank"><IoLogoWhatsapp/></a>
  
  <a className='af' href='https://www.facebook.com/elshik3qrat?mibextid=ZbWKwL' target="_blank"><IoLogoFacebook/></a>
    

  <a className='ae' href='mailto:sabertawfiq7@gmail.com' target="_blank"><AiOutlineMail/></a>
  </header>
  )
}

export default Navbar;