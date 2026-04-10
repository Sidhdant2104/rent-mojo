import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="w-24 h-24 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-8">
        <CheckCircle className="w-12 h-12" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Order Confirmed!</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-lg">
        Thank you for choosing Rent Mojo. Your premium rentals are being prepared for delivery. We&apos;ve sent a confirmation email with details.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg"
        >
          View Dashboard
        </Link>
        <Link 
          href="/catalog"
          className="inline-flex items-center justify-center rounded-full border border-input bg-background px-8 py-3.5 text-sm font-bold transition-all hover:bg-muted hover:-translate-y-1 hover:shadow-sm"
        >
          Continue Browsing
        </Link>
      </div>
    </div>
  );
}
