import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Sidebar/Sidebar.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import Burger from '../Burger/Burger';

const CollapseMenu = (props) => {
  return (
    // Pass on our props
    <Menu right width={'50%'} {...props} customBurgerIcon={<Burger />}>
      <Link className='menu-item' to='/'>
        Home
      </Link>

      <Link className='menu-item' to='/about'>
        About
      </Link>

      <Link className='menu-item' to='/services'>
        Services
      </Link>

      <Link className='menu-item' to='/contact'>
        Contact us
      </Link>
    </Menu>
  );
};

export default CollapseMenu;
