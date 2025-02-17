import React, { useRef } from 'react'
import './Header.css'


const Header = () => {
  const navRef = useRef();



  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  return (
    <>
      <header>
        <ul className="navlist active" ref={navRef}>
          <li><img src={require('../images/signature.png')} alt="" className='logo' /></li>
          <li><a href="#home" > Home</a></li>
          <li><a href="#about"> About </a></li>
          <li><a href="#work">Content</a></li>
          <li><a href="#skill"> Skills</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>


        <div className="bx bx-menu " id="menu-icon" onClick={showNavbar}></div>





      </header>
    </>
  )
}

export default Header