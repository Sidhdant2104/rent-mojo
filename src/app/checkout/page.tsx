"use client";

import { useCartStore } from "@/lib/store";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false);
  const { items, getTotalRent, getTotalDeposit, clearCart } = useCartStore();
  const router = useRouter();

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    deliveryDate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <Link href="/catalog" className="text-primary hover:underline">Return to Catalog</Link>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and order creation
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 1500);
  };

  const subtotal = getTotalRent() + getTotalDeposit();

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/cart" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Cart
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={handleCheckout} className="space-y-8">
            <div className="bg-muted/10 border p-6 md:p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <input required id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="john@example.com" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="+91 98765 43210" />
                </div>
              </div>
            </div>

            <div className="bg-muted/10 border p-6 md:p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6">Delivery Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="street" className="text-sm font-medium">Street Address</label>
                  <input required id="street" name="street" value={formData.street} onChange={handleInputChange} className="w-full flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="123 Main St, Apt 4B" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="text-sm font-medium">City</label>
                  <input required id="city" name="city" value={formData.city} onChange={handleInputChange} className="w-full flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Mumbai" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="state" className="text-sm font-medium">State</label>
                  <input required id="state" name="state" value={formData.state} onChange={handleInputChange} className="w-full flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Maharashtra" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="zipCode" className="text-sm font-medium">PIN Code</label>
                  <input required id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} className="w-full flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="400001" />
                </div>
              </div>
            </div>

            <div className="bg-muted/10 border p-6 md:p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6">Delivery Schedule</h2>
              <div className="space-y-2">
                <label htmlFor="deliveryDate" className="text-sm font-medium">Preferred Delivery Date</label>
                <input required type="date" id="deliveryDate" name="deliveryDate" value={formData.deliveryDate} onChange={handleInputChange} className="w-full flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                <p className="text-xs text-muted-foreground mt-2">Delivery guarantees within 48 hours of selected date.</p>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg disabled:opacity-70 flex justify-center items-center"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Processing Order...</span>
              ) : (
                <>Confirm & Pay ₹{subtotal}</>
              )}
            </button>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-muted/30 border rounded-3xl p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-muted overflow-hidden shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm leading-tight">{item.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">Qty: {item.quantity} • {item.tenureMonths} Mo.</p>
                    <p className="font-bold text-sm mt-1">₹{item.monthlyPrice * item.quantity}/mo</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="my-6 border-t border-border/50" />
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Monthly Rent</span>
                <span className="font-medium text-foreground">₹{getTotalRent()}/mo</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Refundable Deposit</span>
                <span className="font-medium text-foreground">₹{getTotalDeposit()}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Delivery</span>
                <span className="font-bold text-green-600 dark:text-green-400">Free</span>
              </div>
            </div>
            
            <div className="my-4 border-t border-border/50" />
            
            <div className="flex justify-between items-baseline">
              <span className="font-bold">Total</span>
              <span className="font-extrabold text-2xl text-primary">₹{subtotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
