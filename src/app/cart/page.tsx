"use client";

import { useCartStore } from "@/lib/store";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity, getTotalRent, getTotalDeposit } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="container mx-auto px-4 py-24 min-h-[60vh] flex items-center justify-center">Loading cart...</div>;
  }

  const totalRent = getTotalRent();
  const totalDeposit = getTotalDeposit();
  const subtotal = totalRent + totalDeposit;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <ShoppingCart className="w-10 h-10 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-extrabold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8 text-lg max-w-md">Looks like you haven't added any premium rentals to your cart yet.</p>
        <Link 
          href="/catalog"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg"
        >
          Explore Catalog <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 border rounded-3xl bg-card">
              <div className="w-full sm:w-32 h-32 relative rounded-2xl overflow-hidden shrink-0 bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl">{item.name}</h3>
                    <p className="text-muted-foreground text-sm uppercase tracking-wide font-semibold mt-1">
                      {item.category} • {item.tenureMonths} Months Tenure
                    </p>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors hover:bg-destructive/10 rounded-full"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4 bg-muted/50 rounded-full p-1 border">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-background transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-semibold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-background transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-extrabold text-xl">₹{item.monthlyPrice * item.quantity}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                    <p className="text-sm text-muted-foreground">Deposit: ₹{item.deposit * item.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-muted/30 border rounded-3xl p-8 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Monthly Rent (x{items.length} items)</span>
                <span className="font-medium text-foreground">₹{totalRent}/mo</span>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Refundable Deposit</span>
                <span className="font-medium text-foreground">₹{totalDeposit}</span>
              </div>
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Delivery & Setup</span>
                <span className="font-bold text-green-600 dark:text-green-400">Free</span>
              </div>
            </div>
            
            <div className="my-6 border-t border-border/50" />
            
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-bold text-lg">Total Payable Now</span>
              <span className="font-extrabold text-3xl text-primary">₹{subtotal}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-8 text-right">First month rent + deposit</p>
            
            <Link 
              href="/checkout"
              className="w-full flex items-center justify-center py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-foreground/90 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
