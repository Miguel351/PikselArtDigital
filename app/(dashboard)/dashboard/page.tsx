import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const name = user?.user_metadata?.full_name ?? "Öğrenci";

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        Hoş geldin, {name}! 👋
      </h2>
      <p className="text-gray-500 mb-8">Öğrenmeye devam et, hedeflerine ulaş.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Tamamlanan Ders" value="0" icon="📚" color="blue" />
        <StatCard label="Quiz Skoru (Ort.)" value="—" icon="📝" color="green" />
        <StatCard label="Tamamlanma %" value="0%" icon="📊" color="purple" />
      </div>
    </div>
  );
}

function StatCard({
  label, value, icon, color,
}: {
  label: string;
  value: string;
  icon: string;
  color: "blue" | "green" | "purple";
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-green-50 text-green-700",
    purple: "bg-purple-50 text-purple-700",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}
