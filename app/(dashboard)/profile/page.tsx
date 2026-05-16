import type { Metadata } from "next";

export const metadata: Metadata = { title: "Profilim" };

export default function ProfilePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Profilim</h2>
      <p className="text-gray-500">Profil ayarları yakında eklenecek.</p>
    </div>
  );
}
