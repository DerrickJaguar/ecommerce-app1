// pages/_app.tsx
import type { AppProps } from 'next/app'; // 👈 important
import Navbar from '@/components/navbar';
import { Toaster } from 'react-hot-toast';


import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/nextjs';

import { CartProvider } from '../context/cartcontext';
// import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // const { pathname } = useRouter();

  return (
    <ClerkProvider {...pageProps}>
      <CartProvider>
        <Navbar />
        <SignedOut>
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-10 text-center space-y-6 max-w-md w-full">
              <h1 className="text-2xl font-bold text-gray-800">Welcome to Jagua Shop</h1>
              <p className="text-gray-600">
                Please sign in to continue to your personalized shopping experience.
              </p>
              <SignInButton mode="modal">
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-semibold transition duration-200">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="p-4 flex justify-end">
            <UserButton afterSignOutUrl="/" />
          </div>
          <Component {...pageProps} />
          <Toaster position="top-right" />
        </SignedIn>
      </CartProvider>
    </ClerkProvider>
  );
}

export default MyApp;
