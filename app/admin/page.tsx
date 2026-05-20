"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({ salidas: 0, resenas: 0, cuposTotal: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { router.push("/admin/login"); return; }

      const [{ count: salidas }, { count: resenas }, { data: cuposData }] = await Promise.all([
        supabase.from("salidas").select("*", { count: "exact", head: true }).eq("activa", true),
        supabase.from("resenas").select("*", { count: "exact", head: true }).eq("activa", true),
        supabase.from("salidas").select("cupos_disponibles").eq("activa", true),
      ]);

      const cuposTotal = cuposData?.reduce((acc, s) => acc + s.cupos_disponibles, 0) ?? 0;
      setStats({ salidas: salidas ?? 0, resenas: resenas ?? 0, cuposTotal });
      setLoading(false);
    }
    init();
  }, [router]);

  if (loading) return (
    <div className="min-h-screen bg-[#080f06] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-forest-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const statCards = [
    { label: "Salidas activas", value: stats.salidas, icon: "📅", color: "border-forest-600/40" },
    { label: "Reseñas publicadas", value: stats.resenas, icon: "⭐", color: "border-[#c8a45a]/40" },
    { label: "Cupos disponibles", value: stats.cuposTotal, icon: "👥", color: "border-forest-500/40" },
  ];

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-60 p-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl text-white mb-2" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>
            DASHBOARD
          </h1>
          <p className="text-white/40 text-sm mb-10" style={{ fontFamily: "var(--font-body)" }}>
            Bienvenido al panel de administración de One Break Adventure.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {statCards.map((s, i) => (
              <div key={i} className={`p-6 rounded-sm bg-[#0a1208] border ${s.color}`}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-4xl text-white font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                <div className="text-white/40 text-xs tracking-widest" style={{ fontFamily: "var(--font-condensed)" }}>{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>

          {/* Quick actions */}
          <h2 className="text-white/60 text-xs tracking-widest mb-4" style={{ fontFamily: "var(--font-condensed)" }}>
            ACCIONES RÁPIDAS
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/admin/salidas", label: "Agregar nueva salida", icon: "+" },
              { href: "/admin/resenas", label: "Gestionar reseñas", icon: "★" },
              { href: "/admin/textos", label: "Editar textos del sitio", icon: "✏" },
              { href: "/", label: "Ver sitio web", icon: "↗", target: "_blank" },
            ].map((a, i) => (
              <a key={i} href={a.href} target={a.target}
                className="flex items-center gap-3 p-4 rounded-sm bg-[#0a1208] border border-forest-800/30
                          hover:border-forest-600/50 text-white/60 hover:text-white transition-all duration-200 group">
                <span className="text-forest-400 text-lg w-6 text-center">{a.icon}</span>
                <span className="text-sm" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.05em" }}>{a.label}</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
