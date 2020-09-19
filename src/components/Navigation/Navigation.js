import React, { useState } from 'react';
import '../Navigation/Navigation.css';
import Logo from '../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';

const Header = () => {
  return (
    <nav className='header__nav'>
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default Header;
