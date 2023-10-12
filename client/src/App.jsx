import data from "./data";

export default function App() {
  return (
    <div >
      <header className='bg-gray-700 text-white font-semibold text-lg py-3 px-20 sticky top-0'>
        Amazona
      </header>
      <main className="pb-20 pt-10">
        <h1 className="text-5xl font-bold text-center py-3 font-serif">Feature Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center items-center px-5">
        {data.products.map(product =>(
          <div key={product.slug} className="flex flex-col justify-center items-center border-2 border-gray-600 p-3 rounded-2xl">
            <img src={product.image} alt={product.name} className="h-[500px] w-96 rounded pb-10"/>
            <h1 className="text-center font-semibold text-lg font-serif">{product.name}</h1>
            <p className="text-center font-semibold text-lg font-serif">${product.price}</p>
            <button className="bg-green-500 text-white py-2 px-5 font-serif font-semibold rounded my-3">Add to Cart</button>
          </div>
        ))}
        </div>
      </main>
    </div>
  );
}
