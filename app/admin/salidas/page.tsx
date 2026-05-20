"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import type { Salida } from "@/types";
import AdminSidebar from "@/components/admin/AdminSidebar";

const EMPTY: Partial<Salida> = {
  titulo: "", descripcion: "", fecha: "", ubicacion: "Sierras de Córdoba",
  cupos_total: 8, cupos_disponibles: 8, imagen_url: "", activa: true,
};

export default function AdminSalidas() {
  const router = useRouter();
  const [salidas, setSalidas] = useState<Salida[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<Partial<Salida>>(EMPTY);
  const [editing, setEditing] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function init() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { router.push("/admin/login"); return; }
      fetchSalidas();
    }
    init();
  }, [router]);

  async function fetchSalidas() {
    const { data } = await supabase.from("salidas").select("*").order("fecha", { ascending: true });
    setSalidas(data ?? []);
    setLoading(false);
  }

  async function handleSave() {
    if (!form.titulo || !form.fecha) return;
    setSaving(true);
    if (editing) {
      await supabase.from("salidas").update(form).eq("id", editing);
    } else {
      await supabase.from("salidas").insert(form);
    }
    setSaving(false);
    setShowForm(false);
    setForm(EMPTY);
    setEditing(null);
    fetchSalidas();
  }

  async function handleDelete(id: string) {
    if (!confirm("¿Eliminar esta salida?")) return;
    await supabase.from("salidas").delete().eq("id", id);
    fetchSalidas();
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;
    const { data, error } = await supabase.storage.from("salidas").upload(path, file);
    if (!error && data) {
      const { data: urlData } = supabase.storage.from("salidas").getPublicUrl(path);
      setForm((f) => ({ ...f, imagen_url: urlData.publicUrl }));
    }
    setUploading(false);
  }

  function startEdit(s: Salida) {
    setForm(s);
    setEditing(s.id);
    setShowForm(true);
  }

  if (loading) return <LoadingScreen />;

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 ml-60 p-8">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl text-white" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.03em" }}>PRÓXIMAS SALIDAS</h1>
              <p className="text-white/40 text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>{salidas.length} salidas registradas</p>
            </div>
            <button onClick={() => { setForm(EMPTY); setEditing(null); setShowForm(true); }}
              className="flex items-center gap-2 bg-forest-600 hover:bg-forest-500 text-white px-4 py-2 rounded-sm transition-all duration-200 text-sm"
              style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em" }}>
              + NUEVA SALIDA
            </button>
          </div>

          {/* Form modal */}
          {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
              <div className="w-full max-w-lg bg-[#0a1208] border border-forest-800/50 rounded-sm p-6 max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  {editing ? "EDITAR SALIDA" : "NUEVA SALIDA"}
                </h2>
                <div className="flex flex-col gap-4">
                  {/* Imagen */}
                  <div>
                    <label className="admin-label">IMAGEN</label>
                    {form.imagen_url && (
                      <div className="relative w-full h-32 mb-2 rounded-sm overflow-hidden">
                        <Image src={form.imagen_url} alt="preview" fill className="object-cover" sizes="500px" />
                      </div>
                    )}
                    <input type="file" accept="image/*" onChange={handleImageUpload}
                      className="w-full text-white/50 text-sm file:mr-3 file:bg-forest-700 file:text-white file:border-0 file:px-3 file:py-1.5 file:rounded-sm file:text-xs file:cursor-pointer" />
                    {uploading && <p className="text-forest-400 text-xs mt-1">Subiendo imagen...</p>}
                  </div>
                  <AdminInput label="TÍTULO" value={form.titulo ?? ""} onChange={(v) => setForm(f => ({ ...f, titulo: v }))} />
                  <AdminInput label="FECHA" type="date" value={form.fecha ?? ""} onChange={(v) => setForm(f => ({ ...f, fecha: v }))} />
                  <AdminInput label="UBICACIÓN" value={form.ubicacion ?? ""} onChange={(v) => setForm(f => ({ ...f, ubicacion: v }))} />
                  <div>
                    <label className="admin-label">DESCRIPCIÓN</label>
                    <textarea value={form.descripcion ?? ""} onChange={(e) => setForm(f => ({ ...f, descripcion: e.target.value }))}
                      rows={3} className="admin-input w-full resize-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <AdminInput label="CUPOS TOTAL" type="number" value={String(form.cupos_total ?? 8)} onChange={(v) => setForm(f => ({ ...f, cupos_total: Number(v) }))} />
                    <AdminInput label="CUPOS DISPONIBLES" type="number" value={String(form.cupos_disponibles ?? 8)} onChange={(v) => setForm(f => ({ ...f, cupos_disponibles: Number(v) }))} />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={form.activa ?? true} onChange={(e) => setForm(f => ({ ...f, activa: e.target.checked }))}
                      className="w-4 h-4 accent-forest-500" />
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
            {salidas.length === 0 && (
              <div className="text-center py-16 text-white/30" style={{ fontFamily: "var(--font-body)" }}>
                No hay salidas registradas. Creá la primera.
              </div>
            )}
            {salidas.map((s) => (
              <div key={s.id} className="flex items-center gap-4 p-4 bg-[#0a1208] border border-forest-800/30 hover:border-forest-700/50 rounded-sm transition-colors duration-200">
                {s.imagen_url && (
                  <div className="relative w-16 h-12 rounded-sm overflow-hidden shrink-0">
                    <Image src={s.imagen_url} alt={s.titulo} fill className="object-cover" sizes="64px" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold truncate" style={{ fontFamily: "var(--font-condensed)" }}>{s.titulo}</p>
                  <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                    {new Date(s.fecha + "T00:00:00").toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" })} · {s.cupos_disponibles}/{s.cupos_total} cupos · {s.activa ? "✓ Publicada" : "Oculta"}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => startEdit(s)}
                    className="px-3 py-1.5 border border-forest-700/50 text-white/60 hover:text-white text-xs rounded-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--font-condensed)" }}>
                    EDITAR
                  </button>
                  <button onClick={() => handleDelete(s.id)}
                    className="px-3 py-1.5 border border-red-900/50 text-red-400/60 hover:text-red-400 text-xs rounded-sm transition-colors duration-200"
                    style={{ fontFamily: "var(--font-condensed)" }}>
                    ELIMINAR
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

function AdminInput({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="admin-label">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="admin-input w-full" />
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#080f06] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-forest-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
