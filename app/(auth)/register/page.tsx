import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = { title: "Kayıt Ol" };

export default function RegisterPage() {
  return (
    <>
      <h2 className="text-2xl font-bold text-white mb-6">Hesap Oluştur</h2>
      <RegisterForm />
    </>
  );
}
