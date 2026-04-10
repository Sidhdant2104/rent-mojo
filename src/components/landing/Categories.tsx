"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      title: "Premium Furniture",
      description: "Beds, sofas, dining tables, and more to make your house a home.",
      href: "/catalog?category=furniture",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
      color: "from-amber-500/20 to-orange-600/20",
    },
    {
      title: "Smart Appliances",
      description: "TVs, refrigerators, washing machines, and microwaves.",
      href: "/catalog?category=appliance",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
      color: "from-blue-500/20 to-cyan-600/20",
    },
  ];

  return (
    <section className="py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Find exactly what you need to complete your space.
            </p>
          </div>
          <Link href="/catalog" className="text-primary font-medium hover:underline inline-flex items-center">
            View all categories <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={category.href}
                className="group relative block overflow-hidden rounded-[2rem] min-h-[400px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} mix-blend-overlay`} />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                  <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-foreground/80 text-lg mb-6 max-w-sm">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center justify-center rounded-full bg-background/30 backdrop-blur-md px-6 py-3 text-sm font-medium border border-border/50 w-max group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    Explore Now <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
