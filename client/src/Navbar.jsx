// import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <header className='bg-gray-700 text-white font-semibold text-lg py-4 px-20 sticky top-0'>
          Amazon
        </header>
      </Link>
      <Outlet />
    </div>
  );
};

export default Navbar;
