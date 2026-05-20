"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { TextoGeneral } from "@/types";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminTextos() {
  const router = useRouter();
  const [textos, setTextos] = useState<TextoGeneral[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [edited, setEdited] = useState<Record<string, string>>({});

  useEffect(() => {
    async function init() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { router.push("/admin/login"); return; }
      const { data } = await supabase.from("textos_generales").select("*").order("clave");
      setTextos(data ?? []);
      setLoading(false);
    }
    init();
  }, [router]);

  async function handleSave(t: TextoGeneral) {
    setSaving(t.id);
    await supabase.from("textos_generales").update({ valor: edited[t.id] ?? t.valor }).eq("id", t.id);
    setSaving(null);
    const { data } = await supabase.from("textos_generales").select("*").order("clave");
    setTextos(data ?? []);
  }

  if (loading) return <div className="min-h-screen bg-[#080f06] flex items-center justify-center"><div className="w-6 h-6 border-2 border-forest-500 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-60 p-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl text-white mb-2" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>TEXTOS DEL SITIO</h1>
          <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "var(--font-body)" }}>
            Editá los textos generales que aparecen en el sitio. Los cambios se aplican al guardar.
          </p>
          <div className="flex flex-col gap-4">
            {textos.map((t) => (
              <div key={t.id} className="p-5 bg-[#0a1208] border border-forest-800/30 rounded-sm">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-forest-400 text-xs tracking-widest" style={{ fontFamily: "var(--font-condensed)" }}>{t.clave.toUpperCase()}</span>
                    {t.descripcion && <p className="text-white/30 text-xs mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{t.descripcion}</p>}
                  </div>
                </div>
                <div className="flex gap-3">
                  <textarea
                    defaultValue={t.valor}
                    onChange={(e) => setEdited(prev => ({ ...prev, [t.id]: e.target.value }))}
                    rows={2}
                    className="flex-1 admin-input resize-none text-sm"
                  />
                  <button
                    onClick={() => handleSave(t)}
                    disabled={saving === t.id}
                    className="shrink-0 bg-forest-600 hover:bg-forest-500 disabled:opacity-50 text-white px-4 py-2 rounded-sm text-xs transition-all duration-200 self-end"
                    style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em" }}
                  >
                    {saving === t.id ? "..." : "GUARDAR"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
