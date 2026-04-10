"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { CopyPlus, TrendingUp, AlertCircle, Wrench } from "lucide-react";
import Link from "next/link";

export default function DashboardHome() {
  const { data: session } = useSession();

  // Mock Active Rentals Data
  const activeRentals = [
    {
      id: "ORD-10928",
      productName: "Modern Velvet Sofa",
      imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
      monthlyRent: 3500,
      status: "Active",
      nextBillingDate: "15th May, 2026",
      tenureEndDate: "15th Nov, 2026"
    },
    {
      id: "ORD-10931",
      productName: "Smart 4K TV 55\"",
      imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
      monthlyRent: 4500,
      status: "Processing Delivery",
      nextBillingDate: "N/A",
      tenureEndDate: "12 Months"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">My Rentals</h1>
        <p className="text-muted-foreground">Manage your active subscriptions, track deliveries, and request maintenance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-3xl border bg-card">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-primary/10 rounded-full"><TrendingUp className="w-5 h-5 text-primary" /></div>
            <h3 className="font-semibold text-muted-foreground">Total Monthly Rent</h3>
          </div>
          <p className="text-3xl font-extrabold">₹8,000</p>
        </div>
        <div className="p-6 rounded-3xl border bg-card">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-purple-500/10 rounded-full"><CopyPlus className="w-5 h-5 text-purple-600 dark:text-purple-400" /></div>
            <h3 className="font-semibold text-muted-foreground">Active Items</h3>
          </div>
          <p className="text-3xl font-extrabold">2</p>
        </div>
        <div className="p-6 rounded-3xl border bg-card">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 bg-amber-500/10 rounded-full"><AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" /></div>
            <h3 className="font-semibold text-muted-foreground">Action Required</h3>
          </div>
          <p className="text-3xl font-extrabold">0</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Current Subscriptions</h2>
        {activeRentals.map((rental) => (
          <div key={rental.id} className="flex flex-col sm:flex-row gap-6 p-6 border rounded-3xl bg-card">
            <div className="w-full sm:w-32 h-32 relative rounded-2xl overflow-hidden shrink-0 bg-muted">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={rental.imageUrl} alt={rental.productName} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-muted border text-muted-foreground">{rental.id}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${rental.status === 'Active' ? 'bg-green-500/10 text-green-700 dark:text-green-400' : 'bg-primary/10 text-primary'}`}>
                      {rental.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl">{rental.productName}</h3>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="font-extrabold text-xl text-primary">₹{rental.monthlyRent}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4 text-sm bg-muted/30 p-3 rounded-xl border">
                <div>
                  <p className="text-muted-foreground mb-0.5">Next Billing</p>
                  <p className="font-semibold">{rental.nextBillingDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-0.5">Tenure Ends</p>
                  <p className="font-semibold">{rental.tenureEndDate}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-sm">
                  <Wrench className="w-4 h-4" /> Request Service
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-background font-medium hover:bg-muted transition-colors text-sm">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="p-8 border-2 border-dashed rounded-3xl text-center flex flex-col items-center justify-center bg-muted/10">
          <div className="w-16 h-16 bg-background border rounded-full flex flex-col items-center justify-center mb-4 text-muted-foreground shadow-sm">
            <CopyPlus className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg mb-2">Need more items?</h3>
          <p className="text-muted-foreground max-w-sm mb-6 text-sm">Expand your living space with our premium selection of furniture and appliances.</p>
          <Link href="/catalog" className="px-6 py-2 rounded-full bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors">
            Browse Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
