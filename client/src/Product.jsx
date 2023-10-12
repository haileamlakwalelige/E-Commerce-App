//import React from 'react';
// import data from './data';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Product = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <div>
      <Navbar />
      <div className='font-bold text-3xl justify-center items-center flex py-10'>
        products name {slug}
      </div>
    </div>
  );
};
export default Product;
