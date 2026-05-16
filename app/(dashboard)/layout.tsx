import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { logout } from "@/lib/actions/auth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

function Sidebar() {
  const navItems = [
    { href: "/dashboard", label: "Ana Sayfa", icon: "🏠" },
    { href: "/courses", label: "Dersler", icon: "📚" },
    { href: "/quizzes", label: "Testler", icon: "📝" },
    { href: "/reports", label: "Raporlarım", icon: "📊" },
    { href: "/profile", label: "Profil", icon: "👤" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-lg font-bold text-blue-800">Piksel Art Digital</h1>
      </div>
      <nav className="flex-1 p-4 flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
          >
            <span>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-100">
        <form action={logout}>
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium"
          >
            <span>🚪</span> Çıkış Yap
          </button>
        </form>
      </div>
    </aside>
  );
}

async function Header() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const name = user?.user_metadata?.full_name ?? user?.email ?? "Kullanıcı";

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div />
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
          {name.charAt(0).toUpperCase()}
        </div>
        <span className="text-sm text-gray-700 font-medium">{name}</span>
      </div>
    </header>
  );
}
