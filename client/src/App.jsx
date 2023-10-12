import data from "./data";

export default function App() {
  return (
    <div>
      <header className='bg-gray-700 text-white font-semibold text-lg py-3 px-20'>
        Amazona
      </header>
      <main>
        <h1>Feature Products</h1>
        {data.products.map(product =>(
          <div key={product.slug}>
            <img src={product.img} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
