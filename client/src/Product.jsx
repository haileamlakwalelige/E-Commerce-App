import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Ratings from './components/Rating';
import Loading from './components/Loading';
import Error from './components/Error';

const Product = () => {
  const { slug } = useParams();
  console.log(slug);
  const {
    isLoading,
    error,
    data: productOne,
  } = useQuery('product', async () => {
    const response = await axios.get(
      `http://localhost:8000/api/products/slug/${slug}`
    );
    return response.data;
  });

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div><Error errors={error.message} /></div>;
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-6 md:px-10 lg:px-20 h-[100vh] py-12'>
      <div className='col-span-1 md:cols-span-2 lg:col-span-2 xl:col-span-3 ml-2 sm:ml-4 md:ml-6 lg:ml-20'>
        <img
          src={productOne.image}
          alt={productOne.name}
          className='h-[600px] w-2/3 rounded-3xl'
        />
      </div>
      <div className='col-span-1'>
        <p className='font-semibold text-3xl text-start'>{productOne.name}</p>
        <div className=' text-2xl'>
          <Ratings rating={productOne.rating} numRev={productOne.numRev} />
        </div>
        <p className='font-serif text-xl'>
          <span className='font-serif text-lg font-semibold'>Price :</span> $
          {productOne.price}
        </p>
        <p className='font-serif text-xl'>
          <span className='font-serif text-lg font-semibold'>
            Description :
          </span>{' '}
          {productOne.description}
        </p>
      </div>
      <div className='border-2 px-3 h-44 py-2 flex flex-col justify-center items-start'>
        <p className='font-serif text-xl'>
          <span className='font-semibold text-xl font-serif pr-10'>Price:</span>
          ${productOne.price}
        </p>
        <div className='flex'>
          <span className='font-semibold text-xl font-serif pr-10'>
            Status:
          </span>{' '}
          {productOne.countInStock >= 1 ? (
            <p className='font-serif text-xl px-2 py-1 bg-green-600 text-white rounded'>
              In Stock
            </p>
          ) : (
            <p className='font-serif text-xl px-2 py-1 bg-red-600 text-white rounded'>
              Unavailable
            </p>
          )}
        </div>
        {productOne.countInStock > 0 ? (
          <button className='bg-yellow-600 text-white text-center flex justify-center items-center ml-12 px-3 py-2 rounded-lg text-lg font-serif'>
            Add to Cart
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default Product;
