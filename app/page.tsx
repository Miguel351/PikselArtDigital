import Link from "next/link";
import Image from "next/image";
import { CreditCard, BookOpen, ClipboardCheck, FileBarChart, UserPlus, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden min-h-screen">
      {/* Arka Plan */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')" }}>
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="pt-12 pb-8 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest uppercase flex items-center justify-center gap-4">
            <Image src="/logo1.png" alt="Logo" width={64} height={64} className="h-10 md:h-16 w-auto object-contain" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 drop-shadow-2xl">
              Tüzyev Eğitim Portalı
            </span>
          </h1>
          <div className="mt-4 flex justify-center items-center gap-4 text-blue-300/60 uppercase tracking-[0.3em] text-[10px] md:text-xs">
            <span className="h-[1px] w-8 md:w-12 bg-blue-500/30" />
            Zenginleştirilmiş, Farklılaştırılmış, Alternatif Eğitim.
            <span className="h-[1px] w-8 md:w-12 bg-blue-500/30" />
          </div>
        </header>

        {/* Nav */}
        <nav className="flex justify-center px-4 mb-12">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <button className="flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-blue-300 text-sm font-medium">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                  <svg className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="hidden group-hover:block absolute top-full left-0 mt-2 w-52 z-50">
                  <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-xl p-2 shadow-2xl">
                    {item.sub.map((s) => (
                      <a key={s} href="#" className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-blue-600/20 rounded-lg">{s}</a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero */}
        <main className="flex-grow flex items-center justify-center p-6">
          <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-full text-blue-300 text-xs font-semibold">
                <Zap className="w-3 h-3" />
                Bu program üstün zihin düzeyine sahip çocuklar için uygundur.
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Potansiyelini <br />
                <span className="text-blue-400">Sana Uygun Müfredat</span> ile <br />
                Keşfet.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Tüzyev eğitim platformu, Türkiye&apos;de yüksek potansiyelli öğrenciler için zenginleştirilmiş ve farklılaştırılmış müfredatı tüm öğrencilerle buluşturuyor.
              </p>
              <div className="flex gap-4">
                <Link href="/login" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/30 active:scale-95">
                  Giriş Yap
                </Link>
                <Link href="/register" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-3 rounded-xl font-bold transition-all">
                  Ücretsiz Kaydol
                </Link>
              </div>
            </div>

            {/* Dekoratif Kart */}
            <div className="hidden md:flex justify-center items-center relative">
              <div className="w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] absolute animate-pulse" />
              <div className="relative border border-white/10 bg-white/5 backdrop-blur-md p-10 rounded-3xl transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {["🖥️", "🧠", "🌐", "⚡"].map((emoji, i) => (
                    <div key={i} className="w-24 h-24 bg-slate-800/60 rounded-2xl flex items-center justify-center border border-white/10 hover:border-blue-400 transition-colors text-4xl">
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-8 text-center text-slate-500 text-sm bg-slate-950/50 backdrop-blur-md border-t border-white/5">
          <p>© 2026 TÜZYEV - Türkiye Üstün Zekalılar Yüksek Eğitim Vakfı</p>
        </footer>
      </div>
    </div>
  );
}

const navItems = [
  { label: "Abonelik", icon: CreditCard, sub: ["Paket Seçenekleri", "Ödeme Yöntemleri", "Kurumsal Üyelik"] },
  { label: "Dersler", icon: BookOpen, sub: ["Düşünme Becerileri", "Yaratıcı Yorumlama", "Alternatif Matematik"] },
  { label: "Testler", icon: ClipboardCheck, sub: ["Seviye Tespit", "Haftalık Quiz"] },
  { label: "Veli Raporları", icon: FileBarChart, sub: ["Gelişim Grafikleri", "Devam Durumu"] },
  { label: "Derse Talep", icon: UserPlus, sub: ["Özel Ders Randevusu", "Grup Çalışması"] },
];
