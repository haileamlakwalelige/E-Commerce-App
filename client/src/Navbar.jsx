// import React from 'react';
import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Store } from './Store';
import {BsCart3} from 'react-icons/bs';
// import {Stack, Badge} from '@mui/material';

const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div className='flex flex-col pb-4 '>
      <div className='flex sticky top-0 bg-gray-700 py-2'>
        <Link to='/' className='list-style-none text-decoration-none px-10 '>
          <header className='list-style-none text-decoration-none text-white font-semibold text-lg '>
            Amazon
          </header>
        </Link>
        <Link to='/cart' className='list-style-none text-decoration-none'>
          <div className="flex bg-green-600 rounded-full px-3 py-2">
            <button
              type='button'
              className="text-white"
            >
              <BsCart3 size={30}/>
            </button>
            <p className='text-red-600 font-bold text-lg'>{cart.cartItems.length}</p>
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
