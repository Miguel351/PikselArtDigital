"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { login } from "@/lib/actions/auth";
import { toast } from "sonner";

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    if (result?.error) {
      toast.error(result.error);
      setLoading(false);
    }
    // Başarılı girişte server action redirect("/dashboard") yapıyor
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        placeholder="••••••••"
        required
        autoComplete="current-password"
      />
      <div className="flex justify-end">
        <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
          Şifremi unuttum
        </Link>
      </div>
      <Button type="submit" loading={loading} className="w-full" size="lg">
        Giriş Yap
      </Button>
      <p className="text-center text-sm text-gray-600">
        Hesabın yok mu?{" "}
        <Link href="/register" className="text-blue-600 font-medium hover:underline">
          Ücretsiz kaydol
        </Link>
      </p>
    </form>
  );
}
