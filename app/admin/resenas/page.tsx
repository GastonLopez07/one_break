"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Resena } from "@/types";
import AdminSidebar from "@/components/admin/AdminSidebar";

const EMPTY: Partial<Resena> = {
  nombre: "", ciudad: "", texto: "", experiencia: "Cabalgata Full Day", rating: 5, activa: true,
};

export default function AdminResenas() {
  const router = useRouter();
  const [resenas, setResenas] = useState<Resena[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<Partial<Resena>>(EMPTY);
  const [editing, setEditing] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function init() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { router.push("/admin/login"); return; }
      fetchResenas();
    }
    init();
  }, [router]);

  async function fetchResenas() {
    const { data } = await supabase.from("resenas").select("*").order("created_at", { ascending: false });
    setResenas(data ?? []);
    setLoading(false);
  }

  async function handleSave() {
    if (!form.nombre || !form.texto) return;
    setSaving(true);
    if (editing) {
      await supabase.from("resenas").update(form).eq("id", editing);
    } else {
      await supabase.from("resenas").insert(form);
    }
    setSaving(false);
    setShowForm(false);
    setForm(EMPTY);
    setEditing(null);
    fetchResenas();
  }

  async function toggleActiva(r: Resena) {
    await supabase.from("resenas").update({ activa: !r.activa }).eq("id", r.id);
    fetchResenas();
  }

  async function handleDelete(id: string) {
    if (!confirm("¿Eliminar esta reseña?")) return;
    await supabase.from("resenas").delete().eq("id", id);
    fetchResenas();
  }

  if (loading) return <LoadingScreen />;

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-60 p-8">
        <div className="max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl text-white" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>RESEÑAS</h1>
              <p className="text-white/40 text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>{resenas.length} reseñas registradas</p>
            </div>
            <button onClick={() => { setForm(EMPTY); setEditing(null); setShowForm(true); }}
              className="flex items-center gap-2 bg-forest-600 hover:bg-forest-500 text-white px-4 py-2 rounded-sm transition-all duration-200 text-sm"
              style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em" }}>
              + NUEVA RESEÑA
            </button>
          </div>

          {/* Form modal */}
          {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
              <div className="w-full max-w-md bg-[#0a1208] border border-forest-800/50 rounded-sm p-6">
                <h2 className="text-xl text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  {editing ? "EDITAR RESEÑA" : "NUEVA RESEÑA"}
                </h2>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="admin-label">NOMBRE</label>
                      <input value={form.nombre ?? ""} onChange={(e) => setForm(f => ({ ...f, nombre: e.target.value }))} className="admin-input w-full" />
                    </div>
                    <div>
                      <label className="admin-label">CIUDAD</label>
                      <input value={form.ciudad ?? ""} onChange={(e) => setForm(f => ({ ...f, ciudad: e.target.value }))} className="admin-input w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="admin-label">EXPERIENCIA</label>
                    <select value={form.experiencia ?? ""} onChange={(e) => setForm(f => ({ ...f, experiencia: e.target.value }))} className="admin-input w-full">
                      <option>Cabalgata Corta</option>
                      <option>Cabalgata Full Day</option>
                      <option>Trekking entre Sierras</option>
                    </select>
                  </div>
                  <div>
                    <label className="admin-label">CALIFICACIÓN</label>
                    <div className="flex gap-2 mt-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button key={n} onClick={() => setForm(f => ({ ...f, rating: n }))}
                          className={`text-2xl transition-opacity ${(form.rating ?? 5) >= n ? "opacity-100" : "opacity-30"}`}>
                          ★
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="admin-label">TEXTO</label>
                    <textarea value={form.texto ?? ""} onChange={(e) => setForm(f => ({ ...f, texto: e.target.value }))}
                      rows={4} className="admin-input w-full resize-none" />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={form.activa ?? true} onChange={(e) => setForm(f => ({ ...f, activa: e.target.checked }))} className="w-4 h-4 accent-forest-500" />
                    <span className="text-white/60 text-xs" style={{ fontFamily: "var(--font-condensed)" }}>PUBLICADA</span>
                  </label>
                </div>
                <div className="flex gap-3 mt-6">
                  <button onClick={handleSave} disabled={saving}
                    className="flex-1 bg-forest-600 hover:bg-forest-500 disabled:opacity-50 text-white py-2.5 rounded-sm text-sm transition-all duration-200"
                    style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em" }}>
                    {saving ? "GUARDANDO..." : "GUARDAR"}
                  </button>
                  <button onClick={() => setShowForm(false)}
                    className="flex-1 border border-forest-800/50 text-white/50 hover:text-white py-2.5 rounded-sm text-sm transition-all duration-200"
                    style={{ fontFamily: "var(--font-condensed)" }}>
                    CANCELAR
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* List */}
          <div className="flex flex-col gap-3">
            {resenas.length === 0 && (
              <div className="text-center py-16 text-white/30" style={{ fontFamily: "var(--font-body)" }}>
                No hay reseñas. Agregá la primera.
              </div>
            )}
            {resenas.map((r) => (
              <div key={r.id} className="p-4 bg-[#0a1208] border border-forest-800/30 rounded-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-condensed)" }}>{r.nombre}</span>
                      <span className="text-white/30 text-xs">{r.ciudad}</span>
                      <span className="text-[#c8a45a] text-xs">{"★".repeat(r.rating)}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-sm ${r.activa ? "bg-forest-900/50 text-forest-400" : "bg-red-900/30 text-red-400/60"}`}
                            style={{ fontFamily: "var(--font-condensed)" }}>
                        {r.activa ? "PUBLICADA" : "OCULTA"}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm italic">"{r.texto}"</p>
                    <p className="text-forest-400 text-xs mt-1" style={{ fontFamily: "var(--font-condensed)" }}>{r.experiencia}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button onClick={() => { setForm(r); setEditing(r.id); setShowForm(true); }}
                      className="px-3 py-1.5 border border-forest-700/50 text-white/60 hover:text-white text-xs rounded-sm transition-colors"
                      style={{ fontFamily: "var(--font-condensed)" }}>EDITAR</button>
                    <button onClick={() => toggleActiva(r)}
                      className="px-3 py-1.5 border border-forest-700/50 text-white/60 hover:text-white text-xs rounded-sm transition-colors"
                      style={{ fontFamily: "var(--font-condensed)" }}>{r.activa ? "OCULTAR" : "PUBLICAR"}</button>
                    <button onClick={() => handleDelete(r.id)}
                      className="px-3 py-1.5 border border-red-900/50 text-red-400/60 hover:text-red-400 text-xs rounded-sm transition-colors"
                      style={{ fontFamily: "var(--font-condensed)" }}>ELIMINAR</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function LoadingScreen() {
  return <div className="min-h-screen bg-[#080f06] flex items-center justify-center"><div className="w-6 h-6 border-2 border-forest-500 border-t-transparent rounded-full animate-spin" /></div>;
}
