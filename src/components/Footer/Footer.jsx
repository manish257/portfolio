import React from 'react';
import './Footer.css';
import {BsInstagram} from 'react-icons/bs';
import {ImFacebook} from 'react-icons/im';
import {RiTwitterFill} from 'react-icons/ri';


function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Manish</a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a> 
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
      <a href='https://www.instagram.com/manishkusw/' target="_blank"
                  rel="noreferrer"><BsInstagram /></a>
        <a href='https://www.facebook.com/portrayalss/' target="_blank"
                  rel="noreferrer"><ImFacebook /></a>
        <a href='https://twitter.com/portrayals143' target="_blank"
                  rel="noreferrer"><RiTwitterFill /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Manish. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer;