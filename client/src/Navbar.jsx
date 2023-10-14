// import React from 'react';
import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Store } from './Store';
// import {Stack, Badge} from '@mui/material';

const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div className='flex flex-col pb-4 '>
    <div className="flex sticky top-0 bg-gray-700 py-2">
    <Link to='/' className='list-style-none text-decoration-none px-10 '>
        <header className='list-style-none text-decoration-none text-white font-semibold text-lg '>
          Amazon
        </header>
      </Link>
      <Link to='/cart' className='list-style-none text-decoration-none'>
        {/* <header className='list-style-none text-decoration-none bg-gray-700 text-white font-semibold text-lg py-4 px-20 sticky top-0'>
          Cart
          {cart.cartItems.length > 0 && (
            <span className='badge bg-secondary'> {cart.cartItems.length}</span>
          )}
        </header> */}

        {/* <Stack spacing={2} direction='row'>
          <Badge badgeContent={cart.cartItems.length} color='danger'>Cart</Badge>
        </Stack> */}
      
        <button type='button' className='btn list-style-none text-decoration-none text-white font-semibold text-lg position-relative'>
          Cart {cart.cartItems.length > 0 && (
          <span className='position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle'>
          <span>{cart.cartItems.length}</span>
          
          </span>
           )}
        </button>
      </Link>
    </div>  
      <Outlet />
    </div>
  );
};

export default Navbar;
