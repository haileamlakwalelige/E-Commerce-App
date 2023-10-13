// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
  const { product } = props;

  return (
    <div className='px-4 sm:px-10 md:px-5 flex flex-col items-center justify-center'>
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt='image'
          className='h-[500px] w-96 rounded-2xl'
        />
      </Link>
      <Link to={`/product/${product.slug}`}>
        <h1 className='text-center text-lg font-semibold pt-2'>
          {product.name}
        </h1>
      </Link>
      <p className='py-2 text-center text-lg font-semibold'>
        ${product.price}
      </p>
      <div className='flex justify-center items-center'>
        <button className='font-bold text-white bg-green-500 p-2 flex item-center justify-center rounded'>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default SingleProduct;