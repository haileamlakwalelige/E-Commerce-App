import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery('products', async () => {
    const response = await axios.get('http://localhost:8000/api/products');
    return response.data;
  });

  if (isLoading) {
    return (
      <div className='container'>
        <div className='loader'></div>
        <div className='loader'></div>
        <div className='loader'></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='bg-white text-black font-serif'>
      <div>
        <h1 className='font-bold text-center text-3xl pl-2 sm:pl-6 md:pl-12 lg:pl-24 py-4'>
          Featured Products
        </h1>
      </div>
      <div className='py-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((product, index) => (
          <div
            key={index}
            className='px-4 sm:px-10 md:px-5 flex flex-col items-center justify-center'
          >
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
        ))}
      </div>
    </div>
  );
};

export default Home;
