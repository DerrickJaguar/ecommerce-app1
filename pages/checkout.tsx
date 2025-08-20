// pages/checkout.tsx

import Head from 'next/head';
import { useCart } from '../context/cartcontext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Head>
        <title>Checkout - Jagua Shop</title>
      </Head>
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty. <Link href="/" className="text-green-600 hover:underline">Go back to shop</Link></p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="text-xl font-semibold mb-4">Total: ${total.toFixed(2)}</div>

            <button
              onClick={() => alert('Proceeding to payment... (integration later)')}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </main>
    </>
  );
}
