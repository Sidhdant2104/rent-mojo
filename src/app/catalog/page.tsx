"use client";

import { useState, useEffect, Suspense } from "react";
import ProductCard from "@/components/catalog/ProductCard";
import { Filter, SlidersHorizontal, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

// Mock Data for now
const mockProducts = [
  { id: "1", name: "Modern Velvet Sofa", category: "furniture", monthlyPrice: 3500, imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80" },
  { id: "2", name: "Ergonomic Office Chair", category: "furniture", monthlyPrice: 1200, imageUrl: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80" },
  { id: "3", name: "Smart 4K TV 55\"", category: "appliance", monthlyPrice: 4500, imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80" },
  { id: "4", name: "Minimalist Dining Table", category: "furniture", monthlyPrice: 2500, imageUrl: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=500&q=80" },
  { id: "5", name: "Front Load Washing Machine", category: "appliance", monthlyPrice: 3800, imageUrl: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&q=80" },
  { id: "6", name: "Double Door Refrigerator", category: "appliance", monthlyPrice: 4000, imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80" },
];

function CatalogContent() {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory || "all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Catalog</h1>
          <p className="text-muted-foreground mt-2 text-lg">Browse our premium collection for rent.</p>
        </div>
        
        <div className="flex w-full md:w-auto items-center gap-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
          </div>
          <button className="md:hidden p-2.5 rounded-xl border bg-background hover:bg-muted transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Filter className="w-4 h-4 mr-2" /> Categories
              </h3>
              <div className="space-y-2">
                {["all", "furniture", "appliance"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      activeCategory === cat 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/10">
              <h4 className="font-bold text-primary mb-2">Need Help?</h4>
              <p className="text-sm text-foreground/70 mb-4">Our design consultants are available to help you build the perfect package.</p>
              <button className="text-sm font-bold text-primary hover:underline">Contact Expert</button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 lg:p-24 border rounded-3xl bg-muted/20 text-center">
              <Search className="w-12 h-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or changing categories.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-6 px-6 py-2 rounded-full border bg-background hover:bg-muted transition-colors font-medium text-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Catalog() {
  return (
    <Suspense fallback={<div className="h-[80vh] flex items-center justify-center">Loading catalog...</div>}>
      <CatalogContent />
    </Suspense>
  );
}
