import type { Metadata } from "next";

export const metadata: Metadata = { title: "Raporlarım" };

export default function ReportsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Raporlarım</h2>
      <p className="text-gray-500">Raporlar yakında eklenecek.</p>
    </div>
  );
}
