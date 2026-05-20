"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Email o contraseña incorrectos.");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-[#080f06] flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-forest-800/10 blur-[100px]" />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-16 h-16 mb-4">
            <Image src="/images/logo-icon.jpeg" alt="One Break Adventure" fill className="object-contain rounded-sm" sizes="64px" />
          </div>
          <h1 className="text-white text-2xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
            ONE BREAK
          </h1>
          <span className="text-forest-400 text-xs tracking-widest mt-1" style={{ fontFamily: "var(--font-condensed)" }}>
            PANEL ADMIN
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-white/40 text-xs mb-2 tracking-widest" style={{ fontFamily: "var(--font-condensed)" }}>
              EMAIL
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-forest-900/30 border border-forest-800/50 focus:border-forest-500
                         text-white px-4 py-3 rounded-sm outline-none transition-colors duration-200 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
              placeholder="admin@onebreak.com"
            />
          </div>
          <div>
            <label className="block text-white/40 text-xs mb-2 tracking-widest" style={{ fontFamily: "var(--font-condensed)" }}>
              CONTRASEÑA
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-forest-900/30 border border-forest-800/50 focus:border-forest-500
                         text-white px-4 py-3 rounded-sm outline-none transition-colors duration-200 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs text-center" style={{ fontFamily: "var(--font-body)" }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-forest-600 hover:bg-forest-500 disabled:opacity-50 text-white py-3 rounded-sm
                       transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,115,64,0.4)] text-sm font-semibold"
            style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.1em" }}
          >
            {loading ? "INGRESANDO..." : "INGRESAR"}
          </button>
        </form>
      </div>
    </div>
  );
}
