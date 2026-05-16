import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden flex items-center justify-center p-4">
      {/* Arka Plan */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')" }}>
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo & Başlık */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Image src="/logo1.png" alt="Logo" width={48} height={48} className="h-10 w-auto object-contain" />
            <h1 className="text-2xl font-extrabold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
              Tüzyev
            </h1>
          </div>
          <p className="text-blue-300/60 text-xs uppercase tracking-[0.3em]">Eğitim Portalı</p>
        </div>

        {/* Form Kartı */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
