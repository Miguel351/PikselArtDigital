"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { forgotPassword } from "@/lib/actions/auth";
import { toast } from "sonner";

export function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await forgotPassword(formData);

    if (result?.error) {
      toast.error(result.error);
    } else if (result?.success) {
      toast.success(result.success);
      setDone(true);
    }

    setLoading(false);
  }

  if (done) {
    return (
      <div className="text-center py-4">
        <p className="text-green-600 font-medium">✓ E-posta gönderildi!</p>
        <p className="text-sm text-gray-600 mt-1">
          Şifre sıfırlama bağlantısı için e-postanı kontrol et.
        </p>
        <Link href="/login" className="mt-4 inline-block text-sm text-blue-600 hover:underline">
          ← Girişe dön
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-sm text-gray-600">
        Kayıtlı e-posta adresini gir, şifre sıfırlama bağlantısı gönderelim.
      </p>
      <Input
        id="email"
        name="email"
        type="email"
        label="E-posta"
        placeholder="ornek@email.com"
        required
        autoComplete="email"
      />
      <Button type="submit" loading={loading} className="w-full" size="lg">
        Bağlantı Gönder
      </Button>
      <Link href="/login" className="text-center text-sm text-slate-400 hover:underline">
        ← Girişe dön
      </Link>
    </form>
  );
}
