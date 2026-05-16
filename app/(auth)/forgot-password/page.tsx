import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = { title: "Şifremi Unuttum" };

export default function ForgotPasswordPage() {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Şifremi Unuttum</h2>
      <ForgotPasswordForm />
    </>
  );
}
