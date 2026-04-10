"use client";

import { Plus, Search, Filter, MoreVertical } from "lucide-react";

export default function AdminInventory() {
  const inventory = [
    { id: "1", name: "Modern Velvet Sofa", category: "Furniture", stock: 12, rented: 34, rent: "₹3,500/mo", status: "In Stock" },
    { id: "2", name: "Ergonomic Office Chair", category: "Furniture", stock: 4, rented: 89, rent: "₹1,200/mo", status: "Low Stock" },
    { id: "3", name: "Smart 4K TV 55\"", category: "Appliance", stock: 21, rented: 15, rent: "₹4,500/mo", status: "In Stock" },
    { id: "4", name: "Minimalist Dining Table", category: "Furniture", stock: 0, rented: 42, rent: "₹2,500/mo", status: "Out of Stock" },
    { id: "5", name: "Front Load Washing Machine", category: "Appliance", stock: 8, rented: 67, rent: "₹3,800/mo", status: "In Stock" },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Inventory Management</h1>
          <p className="text-muted-foreground mt-1">Add, edit, and track your rental products.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg">
          <Plus className="w-5 h-5" /> Add New Product
        </button>
      </div>

      <div className="bg-card border rounded-3xl overflow-hidden">
        <div className="p-4 border-b flex flex-col md:flex-row gap-4 justify-between bg-muted/20">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search inventory..." 
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border bg-background rounded-lg text-sm font-medium hover:bg-muted transition-colors">
            <Filter className="w-4 h-4" /> Filter by Category
          </button>
        </div>
        
        <div className="overflow-x-auto p-4">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase">
              <tr>
                <th className="px-4 py-3 border-b">Product Name</th>
                <th className="px-4 py-3 border-b">Category</th>
                <th className="px-4 py-3 border-b">Monthly Rent</th>
                <th className="px-4 py-3 border-b">Available Stock</th>
                <th className="px-4 py-3 border-b">Rented Out</th>
                <th className="px-4 py-3 border-b">Status</th>
                <th className="px-4 py-3 border-b text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className="border-b last:border-0 hover:bg-muted/10 transition-colors">
                  <td className="px-4 py-4 font-bold text-foreground">{item.name}</td>
                  <td className="px-4 py-4 text-muted-foreground">{item.category}</td>
                  <td className="px-4 py-4 font-medium">{item.rent}</td>
                  <td className="px-4 py-4 font-bold">{item.stock} Units</td>
                  <td className="px-4 py-4 text-muted-foreground">{item.rented} Active</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      item.status === 'In Stock' ? 'bg-green-500/10 text-green-700 dark:text-green-400' :
                      item.status === 'Low Stock' ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400' :
                      'bg-destructive/10 text-destructive'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
