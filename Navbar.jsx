import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  // Fungsi untuk mengatur posisi active box
  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      const link = lastActiveLink.current;
      activeBox.current.style.top = `${link.offsetTop}px`;
      activeBox.current.style.left = `${link.offsetLeft}px`;
      activeBox.current.style.width = `${link.offsetWidth}px`;
      activeBox.current.style.height = `${link.offsetHeight}px`;
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);

    return () => {
      window.removeEventListener('resize', initActiveBox);
    };
  }, []); // Hanya dijalankan sekali saat komponen pertama kali dirender

  const activeCurrentLink = (event) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove('active');
    }
    event.target.classList.add('active');
    lastActiveLink.current = event.target;
    initActiveBox();
  };

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link active' },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Reviews', link: '#reviews', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' },
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={activeCurrentLink}
          ref={className.includes('active') ? lastActiveLink : null} // Assign hanya jika active
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
