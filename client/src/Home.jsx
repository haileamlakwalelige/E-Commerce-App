// import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import './Home.css';
import Loading from './components/Loading';
import Error from './components/Error';
import SingleProduct from './components/SingleProduct';

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
    return <Loading />
  }

  if (error) {
    return <div><Error  errors={error.message} /></div>;
  }

  return (
    <div className='bg-white text-black font-serif'>
      <div>
        <h1 className='font-bold text-center text-3xl pl-2 sm:pl-6 md:pl-12 lg:pl-24 py-4'>
          Featured Products
        </h1>
      </div>
        <div className='py-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product) => (
            <SingleProduct key={product.slug} product={product} />
          ))}
    </div>
    </div>
  );
};

export default Home;
