// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useContext } from 'react';
import { Store } from '../Store';

const SingleProduct = (props) => {
  const { product } = props;

  // eslint-disable-next-line no-unused-vars
  const { state, dispatch: ctxDispach } = useContext(Store);
  const addToCartHandler = () => {
    ctxDispach({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
  };

  return (
    <div className='px-4 sm:px-10 md:px-5 flex flex-col items-center justify-center'>
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt='image'
          className='h-[500px] w-96 rounded-2xl'
        />
      </Link>
      <Link
        to={`/product/${product.slug}`}
        className='list-style-none text-decoration-none'
      >
        <h1 className='text-decoration-none list-style-none text-center text-lg font-semibold pt-2'>
          {product.name}
        </h1>
      </Link>
      <p className='py-1 text-center text-lg font-semibold'>${product.price}</p>
      <Rating rating={product.rating} numRev={product.numRev} />
      <div className='flex justify-center items-center'>
        <button
          onClick={addToCartHandler}
          className='font-bold text-white bg-green-500 p-2 flex item-center justify-center rounded'
        >
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
    rating: PropTypes.number.isRequired,
    numRev: PropTypes.number.isRequired,
  }).isRequired,
};

export default SingleProduct;
