import { useRouter } from 'next/router';
import Head from 'next/head';
import { products } from '../../data/products';
import { useCart } from '../../context/cartcontext';
import Link from 'next/link';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id.toString() === id);


  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Product not found.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} - Jagua Shop</title>
      </Head>

      <main className="max-w-4xl mx-auto p-6">
        <Link href="/" className="text-green-600 hover:underline mb-6 inline-block">
          &larr; Back to Products
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg object-cover w-full max-h-[400px]"
            />
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-700 mb-6">{product.description}</p>
              <p className="text-2xl font-extrabold text-green-700 mb-6">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() =>
                addToCart({ id: product.id, name: product.name, price: product.price, description: product.description, image: product.image, })
              }
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
