import { useParams } from 'react-router-dom';


const Product = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <div>
      <div className='font-bold text-3xl justify-center items-center flex py-10'>
        products name {slug}
      </div>
    </div>
  );
};
export default Product;
