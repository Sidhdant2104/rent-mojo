"use client";

import Link from "next/link";
import { ShoppingCart, LogIn, Menu, UserCircle } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const cartItems = useCartStore((state) => state.items);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Rent Mojo
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/catalog"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Furniture
          </Link>
          <Link
            href="/catalog?category=appliance"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Appliances
          </Link>
          <Link
            href="/how-it-works"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            How it Works
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative p-2">
            <ShoppingCart className="w-5 h-5 text-foreground/80 hover:text-foreground transition-colors" />
            {mounted && cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          {session ? (
            <Link
              href="/dashboard"
              className="hidden md:flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              <UserCircle className="w-5 h-5 mr-1" />
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="hidden md:flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Link>
          )}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-foreground/80 hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
}
