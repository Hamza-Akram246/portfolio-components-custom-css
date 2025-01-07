import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '../app/styles/navbar.css';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen (!isMenuOpen)

  };
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <div className='navbar-brand'> Hamza Akram</div>
            {/* large screen nacbar link */}
            <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <li className='navbarlink'><a href='#hero'>Home</a></li>
                <li className='navbarlink'><a href='#about'>About</a></li>
                <li className='navbarlink'><a href='#projects'>Projects</a></li>
                <li className='navbarlink'><a href='#skills'>Skills</a></li>
                <li className='navbarlink'><a href='#contact'>Contact</a></li>
             </ul>

             {/* humberger menu icon */}
            <div className='navbar-menu-icon' onClick={toggleMenu}>
              {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
              

            </div>
        </div>
        
        {/* mobile menu dropdown */}
        {isMenuOpen && (
          <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <li className='navbar-link'>
              <Link href="#hero" onClick={toggleMenu}/>Home
            </li>
            <li className='navbar-link'>
              <Link href="#about" onClick={toggleMenu}/>About
            </li>
            <li className='navbar-link'>
              <Link href="#projects" onClick={toggleMenu}/>Projects
            </li>
            <li className='navbar-link'>
              <Link href="#skills" onClick={toggleMenu}/>Skills
            </li>
            <li className='navbar-link'>
              <Link href="#contact" onClick={toggleMenu}/>Contact
            </li>

          </ul>
        )}
      
    </div>
  )
}

export default Navbar