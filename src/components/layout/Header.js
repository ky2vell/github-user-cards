import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar
      fixed='top'
      color='light'
      light
      expand='md'
      className='justify-content-center shadow-sm'
    >
      <NavbarBrand tag={NavLink} to='/'>
        <i className='fab fa-github'></i> GitHub UserCard
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
