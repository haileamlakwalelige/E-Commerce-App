// import data from './data';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, [])
  return (
    <div className=' bg-white text-black font-serif'>
     <Navbar />
      <div>
        <h1 className='font-bold text-3xl pl-2 sm:pl-6 md:pl-12 lg:pl-24 py-4'>
          Featured Products
        </h1>
      </div>
      <div className='py-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((product, index) => (
          <div key={index} className='px-4 sm:px-10 md:px-5'>
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
