import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Rent Mojo</h3>
            <p className="text-sm text-foreground/60">
              Premium furniture and appliance rentals for the modern urban lifestyle. Flexible, affordable, and sustainable.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="/catalog" className="hover:text-primary transition-colors">Living Room</Link></li>
              <li><Link href="/catalog" className="hover:text-primary transition-colors">Bedroom</Link></li>
              <li><Link href="/catalog?category=appliance" className="hover:text-primary transition-colors">Appliances</Link></li>
              <li><Link href="/catalog" className="hover:text-primary transition-colors">Packages</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cancellation" className="hover:text-primary transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/60">
            &copy; {new Date().getFullYear()} Rent Mojo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
