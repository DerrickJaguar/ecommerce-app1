import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { useCart } from "../context/cartcontext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold text-black">
        Jagua Shop
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/cart" className="relative text-black font-medium">
          Your Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-black text-white px-4 py-1.5 rounded hover:bg-gray-800">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
