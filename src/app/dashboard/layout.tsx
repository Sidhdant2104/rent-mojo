"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { LogOut, Package, CreditCard, Settings, Headset } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading" || !session) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-8 min-h-[85vh]">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="bg-muted/20 border rounded-3xl p-6 sticky top-24">
          <div className="mb-8">
            <h2 className="font-bold text-lg truncate">Hi, {session.user?.name}</h2>
            <p className="text-sm text-muted-foreground truncate">{session.user?.email}</p>
          </div>
          
          <nav className="space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-colors">
              <Package className="w-5 h-5" /> Active Rentals
            </Link>
            <Link href="/dashboard/billing" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
              <CreditCard className="w-5 h-5" /> Billing & Payments
            </Link>
            <Link href="/dashboard/support" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
              <Headset className="w-5 h-5" /> Support & Maintenance
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
              <Settings className="w-5 h-5" /> Settings
            </Link>
          </nav>
          
          <div className="mt-8 pt-8 border-t">
            <button 
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex w-full items-center gap-3 px-4 py-3 rounded-xl hover:bg-destructive/10 text-destructive font-medium transition-colors"
            >
              <LogOut className="w-5 h-5" /> Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
