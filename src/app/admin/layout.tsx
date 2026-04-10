"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { LogOut, LayoutDashboard, PackageSearch, Users, Activity, Settings } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // In a real app we'd verify session.user.role === 'admin'
    // For this demo, we'll let any logged-in user view it so the client can preview.
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading" || !session) {
    return <div className="min-h-screen flex items-center justify-center">Authenticating Admin...</div>;
  }

  return (
    <div className="flex h-[85vh] overflow-hidden bg-muted/10">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r bg-background shrink-0 flex flex-col justify-between">
        <div className="p-6">
          <div className="mb-8">
            <h2 className="font-extrabold text-2xl tracking-tight text-primary">Admin Control</h2>
            <p className="text-xs text-muted-foreground uppercase font-bold mt-1 tracking-wider">Rent Mojo Portal</p>
          </div>
          
          <nav className="space-y-1">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold transition-colors">
              <LayoutDashboard className="w-5 h-5" /> Overview
            </Link>
            <Link href="/admin/inventory" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
              <PackageSearch className="w-5 h-5" /> Inventory
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
              <Users className="w-5 h-5" /> Customers
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
              <Activity className="w-5 h-5" /> Analytics
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground font-medium transition-colors">
              <Settings className="w-5 h-5" /> Settings
            </Link>
          </nav>
        </div>
        
        <div className="p-6 border-t">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              {session.user?.name?.charAt(0) || "A"}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">{session.user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">Administrator</p>
            </div>
          </div>
          <Link href="/" className="flex w-full items-center justify-center gap-2 px-4 py-2 rounded-xl border bg-background font-medium text-sm hover:bg-muted transition-colors">
            <LogOut className="w-4 h-4" /> Exit Portal
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
