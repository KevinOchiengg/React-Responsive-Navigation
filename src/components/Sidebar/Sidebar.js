import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Sidebar/Sidebar.css';
import Burger from '../Burger/Burger';

const CollapseMenu = (props) => {
  return (
    // Pass on our props
    <Menu right width={'50%'} {...props} customBurgerIcon={<Burger />}>
      <a href='#'>Home</a>
      <a href='#'>About</a>
      <a href='#'> Services</a>
      <a href='#'> Contact us</a>
    </Menu>
  );
};

export default CollapseMenu;
