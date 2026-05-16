import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Giriş Yap" };

export default function LoginPage() {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Giriş Yap</h2>
      <LoginForm />
    </>
  );
}
