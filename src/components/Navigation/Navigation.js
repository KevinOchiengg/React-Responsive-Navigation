import React, { useState } from 'react';
import '../Navigation/Navigation.css';
import Logo from '../Logo/Logo';
import { useSpring, animated, config } from 'react-spring';
import NavLinks from '../NavLinks/NavLinks';

const Header = () => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });
  return (
    <nav className='header__nav' style={barAnimation}>
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default Header;
