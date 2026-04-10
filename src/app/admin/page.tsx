"use client";

import { ArrowUpRight, DollarSign, Package, Users, Activity } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Monthly Recurring Revenue", value: "₹4,25,000", change: "+12.5%", icon: <DollarSign className="w-6 h-6 text-green-500" /> },
    { title: "Active Rentals", value: "1,248", change: "+8.2%", icon: <Package className="w-6 h-6 text-primary" /> },
    { title: "Total Customers", value: "852", change: "+15.3%", icon: <Users className="w-6 h-6 text-purple-500" /> },
    { title: "Product Utilization", value: "87%", change: "+2.1%", icon: <Activity className="w-6 h-6 text-amber-500" /> },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Real-time metrics and KPIs for your rental business.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-3xl border bg-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-20 transition-transform group-hover:scale-110 group-hover:rotate-12 duration-500">
              {stat.icon}
            </div>
            <div className="relative z-10">
              <h3 className="font-semibold text-muted-foreground text-sm mb-2">{stat.title}</h3>
              <p className="text-3xl font-extrabold mb-2">{stat.value}</p>
              <div className="flex items-center text-xs font-bold text-green-600 dark:text-green-400">
                <ArrowUpRight className="w-3 h-3 mr-1" /> {stat.change} from last month
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-6 rounded-3xl border bg-card">
          <h3 className="font-bold text-lg mb-4">Recent Orders (Processing)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50 rounded-lg">
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">Order ID</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Item</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3 rounded-r-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/10 transition-colors">
                    <td className="px-4 py-4 font-semibold text-primary">#ORD-902{i}</td>
                    <td className="px-4 py-4">Amit Sharma</td>
                    <td className="px-4 py-4 text-muted-foreground">Smart 4K TV</td>
                    <td className="px-4 py-4 font-medium">₹4,500/mo</td>
                    <td className="px-4 py-4">
                      <span className="bg-amber-500/10 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full text-xs font-bold">Pending Setup</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 rounded-3xl border bg-card flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-primary/10 text-primary border rounded-full flex items-center justify-center mb-4">
            <Package className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Inventory Alerts</h3>
          <p className="text-muted-foreground text-sm mb-6">4 items are currently running low on stock and need replenishment.</p>
          <button className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-full text-sm hover:bg-primary/90 transition-colors w-full">
            Manage Inventory
          </button>
        </div>
      </div>
    </div>
  );
}
