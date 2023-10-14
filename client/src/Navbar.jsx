// import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/' className="list-style-none text-decoration-none">
        <header className='list-style-none text-decoration-none bg-gray-700 text-white font-semibold text-lg py-4 px-20 sticky top-0'>
          Amazon
        </header>
      </Link>
      <Outlet />
    </div>
  );
};

export default Navbar;
