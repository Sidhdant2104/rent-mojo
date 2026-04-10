"use client";

import { motion } from "framer-motion";
import { Sofa, MonitorPlay, Leaf, Truck } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Premium Quality",
      description: "Handpicked, top-tier products that elevate your space.",
      icon: <Sofa className="w-10 h-10 text-primary" />,
    },
    {
      title: "Latest Tech",
      description: "Access the newest appliances without the upfront cost.",
      icon: <MonitorPlay className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Eco-Friendly",
      description: "Reduce waste by joining the circular rental economy.",
      icon: <Leaf className="w-10 h-10 text-emerald-500" />,
    },
    {
      title: "Free Delivery",
      description: "Free delivery, installation, and maintenance included.",
      icon: <Truck className="w-10 h-10 text-blue-500" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Why Rent Mojo?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the freedom of renting with unparalleled perks designed for modern living.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative overflow-hidden rounded-3xl border bg-background p-8 p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent auto opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-muted group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
