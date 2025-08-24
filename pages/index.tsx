import Head from 'next/head';
import { products } from '../data/products';
import { useCart } from '../context/cartcontext';
import Link from 'next/link';

export default function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <Head>
        <title>JaguaShop - Stylish Products</title>
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Our Featured Products
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ id, name, description, price, image }) => (
  <div
    key={id}
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
  >
    <Link href={`/products/${id}`}>
  
    <img src={image} alt={name} className="object-cover w-full h-64" />
    <h2 className="text-2xl font-semibold mb-2 mt-4">{name}</h2>
  
</Link>


    <div className="p-6">
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-green-700">${price.toFixed(2)}</span>
        <button
          onClick={() =>
            addToCart({ id, name, description, price, image,})
          }
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
))}
        </div>
      </main>
    </>
  );
}
