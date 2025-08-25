import { useCart } from '../context/cartcontext';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { products } from '@/data/products';
// import { describe } from 'node:test';

// Dummy suggested products (replace with real fetch if needed)
const suggestedProducts = [
  {
    id: '1',
    name: 'Red T-Shirt',
    description: 'A stylish red t-shirt',
    price: 19.99,
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: '2',
    name: 'Blue Hoodie',
    description: 'A cozy blue hoodie',
    price: 29.99,
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: '3',
    name: 'Green Hat',
    description: 'A stylish green hat',
    price: 9.99,
    image: 'https://via.placeholder.com/300x200',
  },
]

export default function CartPage() {
  const { cart, removeFromCart, clearCart, addToCart } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <>
          <p className="text-gray-500 mb-8">Your cart is empty.</p>
          <h2 className="text-2xl font-semibold mb-4">Suggested Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {suggestedProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mb-3">${product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-lg">${item.price * item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm mt-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
            <div className="mt-4 flex justify-end gap-4">
              <Link href="/checkout">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Checkout
                </button>
              </Link>
              <button
                onClick={clearCart}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
              >
                Clear Cart
              </button>
            </div>
            <Link href="/" className="block mt-6 text-blue-600 hover:underline">
              ← Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
