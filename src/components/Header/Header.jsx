import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
        <div className="container header__container">
          <h5>
            Hello I'm
          </h5>
          <h1>
            Manish Kumar Mahato
          </h1>
          <h5 className='text-light'>
            Fullstack Developer
          </h5>
        </div>
    </header>
  )
}

export default Header;