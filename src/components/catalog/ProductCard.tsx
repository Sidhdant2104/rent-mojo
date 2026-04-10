import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  monthlyPrice: number;
  imageUrl: string;
}

export default function ProductCard({ id, name, category, monthlyPrice, imageUrl }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-background hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full">
      <Link href={`/catalog/${id}`} className="block flex-1 p-4 pb-0">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
          {/* using 'Image' could be tricky with external unconfigured domains, so using img for demo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 left-2">
            <span className="inline-flex items-center rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border">
              {category}
            </span>
          </div>
        </div>
        <div className="pt-4 pb-2">
          <h3 className="font-bold text-lg mb-1 truncate">{name}</h3>
          <p className="text-primary font-medium">
            ₹{monthlyPrice} <span className="text-muted-foreground text-sm font-normal">/ mo</span>
          </p>
        </div>
      </Link>
      <div className="p-4 pt-2 mt-auto">
        <button className="w-full inline-flex items-center justify-center rounded-xl bg-primary/10 text-primary px-4 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
