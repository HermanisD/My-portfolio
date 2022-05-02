import React from 'react';
import './footer.css';
import {FaFacebook, FaLinkedinIn, FaGithubSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Hermanis Djomkins</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
      
        <a href='https://www.facebook.com/hermanis.djomkins/'><FaFacebook/></a>
        <a href='https://www.linkedin.com/in/hermanis-djomkins-550a0130/'><FaLinkedinIn/></a>
        <a href='https://github.com/HermanisD'><FaGithubSquare/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer