import type { Metadata } from "next";

export const metadata: Metadata = { title: "Testler" };

export default function QuizzesPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Testler</h2>
      <p className="text-gray-500">Testler yakında eklenecek.</p>
    </div>
  );
}
