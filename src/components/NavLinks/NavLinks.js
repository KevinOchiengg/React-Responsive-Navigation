import React from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';
import { useSpring, animated, config } from 'react-spring';
// import '..//NavLinks.css';
import '../NavLinks/NavLinks.css';

const NavLinks = () => {
  // const barAnimation = useSpring({
  //   from: { transform: 'translate3d(0, -10rem, 0)' },
  //   transform: 'translate3d(0, 0, 0)',
  // });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <div className='links__container' style={linkAnimation}>
      <Link className='link' to='root-app' smooth={true} duration={1000}>
        Home
      </Link>
      <Link className='link' to='about' smooth={true} duration={1000}>
        About
      </Link>
      <Link className='link' to='services' smooth={true} duration={1000}>
        Services
      </Link>
      <Link className='link' to='projects' smooth={true} duration={1000}>
        Project
      </Link>
      <Link className='link' to='contact' smooth={true} duration={1000}>
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
