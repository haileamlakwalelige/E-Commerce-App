


import data from './data';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div className="py-10 bg-white text-black font-serif">
      <div>
        <h1 className="font-bold text-3xl pl-2 sm:pl-6 md:pl-12 lg:pl-24 py-4">Featured Products</h1>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.products.map((product, index) => (
          <div key={index} className="px-4 sm:px-10 md:px-5">
            <img src={product.image} alt="image" width={500} height={500} />
            <Link href="/product">
              <h1 className='text-center text-lg font-semibold pt-2'>{product.name}</h1>
            </Link>
            <p className='py-2 text-center text-lg font-semibold'>${product.price}</p>
            <div className="flex justify-center items-center">
            <button className="font-bold text-white bg-green-500 p-2 flex item-center justify-center rounded">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero