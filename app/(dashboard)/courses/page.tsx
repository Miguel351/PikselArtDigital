import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dersler" };

export default function CoursesPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dersler</h2>
      <p className="text-gray-500">Dersler yakında eklenecek.</p>
    </div>
  );
}
