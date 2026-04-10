"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Shield, TrendingDown, Truck, Info, Calendar, ShoppingCart } from "lucide-react";
import { use } from "react";
import { useCartStore } from "@/lib/store";

// Mock Data
const mockProducts: Record<string, any> = {
  "1": { id: "1", name: "Modern Velvet Sofa", category: "furniture", monthlyPrice: 3500, deposit: 7000, imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&q=80", description: "Elevate your living room with our Modern Velvet Sofa....", specs: { Dimensions: "84\"W x 35\"D x 30\"H", Material: "Performance Velvet", Color: "Emerald Green" } },
  "2": { id: "2", name: "Ergonomic Office Chair", category: "furniture", monthlyPrice: 1200, deposit: 2400, imageUrl: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=1000&q=80", description: "Work comfortably for hours with our top-tier ergonomic chair...", specs: { WeightCapacity: "300 lbs", Material: "Mesh", Adjustable: "Yes" } },
  "3": { id: "3", name: "Smart 4K TV 55\"", category: "appliance", monthlyPrice: 4500, deposit: 9000, imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=1000&q=80", description: "Experience cinematic viewing at home...", specs: { Size: "55 Inches", Resolution: "4K UHD", RefreshRate: "120Hz" } },
};

const tenures = [
  { months: 3, discount: 0 },
  { months: 6, discount: 10 },
  { months: 12, discount: 20 },
];

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const product = mockProducts[productId];
  
  const [selectedTenure, setSelectedTenure] = useState(6);
  const addItem = useCartStore(state => state.addItem);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link href="/catalog" className="text-primary hover:underline">Return to Catalog</Link>
      </div>
    );
  }

  const selectedTenureData = tenures.find(t => t.months === selectedTenure) || tenures[1];
  const finalMonthlyPrice = Math.round(product.monthlyPrice * (1 - selectedTenureData.discount / 100));

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <Link href="/catalog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-muted border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Gallery thumbnails could go here */}
        </div>

        {/* Product Details & Actions */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {product.category}
            </span>
            <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
              In Stock
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{product.name}</h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border">
              <div className="p-2 bg-background rounded-full shrink-0 shadow-sm border"><Truck className="w-4 h-4 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Delivery</p>
                <p className="text-sm font-bold">Free in 3 Days</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border">
              <div className="p-2 bg-background rounded-full shrink-0 shadow-sm border"><Shield className="w-4 h-4 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">Protection</p>
                <p className="text-sm font-bold">Free Maintenance</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-muted/20 p-6 sm:p-8 rounded-3xl border mb-8 flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" /> Choose Tenure
              </h3>
              {selectedTenureData.discount > 0 && (
                <span className="text-xs font-bold bg-green-500/20 text-green-700 dark:text-green-400 px-2 py-1 rounded-full flex items-center">
                  <TrendingDown className="w-3 h-3 mr-1" /> {selectedTenureData.discount}% Off
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {tenures.map((t) => (
                <button
                  key={t.months}
                  onClick={() => setSelectedTenure(t.months)}
                  className={`relative flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all ${
                    selectedTenure === t.months
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-transparent bg-background hover:border-primary/30 shadow-sm"
                  }`}
                >
                  {selectedTenure === t.months && (
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                  <span className="font-bold text-xl">{t.months}</span>
                  <span className="text-xs text-muted-foreground font-medium">Months</span>
                </button>
              ))}
            </div>

            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-muted-foreground font-medium">Monthly Rent</span>
                <div className="text-right">
                  {selectedTenureData.discount > 0 && (
                    <span className="text-sm text-muted-foreground line-through mr-2">₹{product.monthlyPrice}</span>
                  )}
                  <span className="text-4xl font-extrabold text-primary">₹{finalMonthlyPrice}</span>
                  <span className="text-muted-foreground font-medium">/mo</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground flex items-center">
                  Refundable Deposit <Info className="w-3 h-3 ml-1" />
                </span>
                <span className="font-bold">₹{product.deposit}</span>
              </div>
            </div>

            <button 
              onClick={() => {
                addItem({
                  id: product.id,
                  name: product.name,
                  category: product.category,
                  monthlyPrice: finalMonthlyPrice,
                  deposit: product.deposit,
                  imageUrl: product.imageUrl,
                  quantity: 1,
                  tenureMonths: selectedTenure
                });
              }}
              className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 mt-4 flex justify-center items-center"
            >
              <ShoppingCart className="mr-2 w-5 h-5"/> Add to Cart
            </button>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex flex-col border-b pb-2">
                  <span className="text-sm text-muted-foreground mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="font-medium text-foreground">{value as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
