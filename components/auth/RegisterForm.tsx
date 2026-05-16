"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { register } from "@/lib/actions/auth";
import { toast } from "sonner";

export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm_password") as string;

    if (password !== confirmPassword) {
      toast.error("Şifreler eşleşmiyor.");
      setLoading(false);
      return;
    }

    const result = await register(formData);

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
        <p className="text-green-600 font-medium">✓ E-postanı kontrol et!</p>
        <p className="text-sm text-gray-600 mt-1">
          Hesabını doğrulamak için e-postana gelen bağlantıya tıkla.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        id="full_name"
        name="full_name"
        type="text"
        label="Ad Soyad"
        placeholder="Adın Soyadın"
        required
        autoComplete="name"
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="E-posta"
        placeholder="ornek@email.com"
        required
        autoComplete="email"
      />
      <Input
        id="password"
        name="password"
        type="password"
        label="Şifre"
        placeholder="En az 6 karakter"
        required
        minLength={6}
        autoComplete="new-password"
      />
      <Input
        id="confirm_password"
        name="confirm_password"
        type="password"
        label="Şifre Tekrar"
        placeholder="••••••••"
        required
        autoComplete="new-password"
      />
      <Button type="submit" loading={loading} className="w-full" size="lg">
        Hesap Oluştur
      </Button>
      <p className="text-center text-sm text-slate-400">
        Zaten hesabın var mı?{" "}
        <Link href="/login" className="text-blue-400 font-medium hover:underline">
          Giriş yap
        </Link>
      </p>
    </form>
  );
}
