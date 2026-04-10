"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 flex items-center justify-center min-h-[80vh]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 bg-background">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 z-10 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Now live in Beta
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Furnish your life,{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            flexibly.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        >
          Premium furniture and appliance rentals delivered to your door. Upgrade, downgrade, or cancel anytime. The modern way to live.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Explore Catalog
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 py-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            How it works
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
