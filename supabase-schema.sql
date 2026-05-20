-- ============================================================
-- ONE BREAK ADVENTURE — Supabase Schema
-- Ejecutá este SQL en Supabase Dashboard > SQL Editor
-- ============================================================

-- Tabla: próximas salidas
create table if not exists salidas (
  id uuid default gen_random_uuid() primary key,
  titulo text not null,
  descripcion text,
  fecha date not null,
  ubicacion text default 'Sierras de Córdoba',
  cupos_total integer default 10,
  cupos_disponibles integer default 10,
  imagen_url text,
  activa boolean default true,
  created_at timestamp with time zone default now()
);

-- Tabla: reseñas
create table if not exists resenas (
  id uuid default gen_random_uuid() primary key,
  nombre text not null,
  ciudad text,
  texto text not null,
  experiencia text,
  rating integer default 5 check (rating >= 1 and rating <= 5),
  activa boolean default true,
  created_at timestamp with time zone default now()
);

-- Tabla: textos generales editables
create table if not exists textos_generales (
  id uuid default gen_random_uuid() primary key,
  clave text unique not null,
  valor text not null,
  descripcion text
);

-- Datos iniciales textos
insert into textos_generales (clave, valor, descripcion) values
  ('hero_titulo', 'EN CÓRDOBA', 'Título principal del hero'),
  ('hero_subtitulo', 'Cabalgatas y trekking en las sierras.', 'Subtítulo del hero'),
  ('whatsapp_numero', '5493513124567', 'Número de WhatsApp')
on conflict (clave) do nothing;

-- Storage bucket para imágenes
insert into storage.buckets (id, name, public)
values ('salidas', 'salidas', true)
on conflict do nothing;

-- Políticas de acceso público para leer imágenes
create policy "Public read salidas images"
  on storage.objects for select
  using (bucket_id = 'salidas');

-- RLS: habilitar en tablas
alter table salidas enable row level security;
alter table resenas enable row level security;
alter table textos_generales enable row level security;

-- Políticas: lectura pública
create policy "Public read salidas" on salidas for select using (true);
create policy "Public read resenas" on resenas for select using (activa = true);
create policy "Public read textos" on textos_generales for select using (true);

-- Políticas: escritura solo autenticados
create policy "Auth write salidas" on salidas for all using (auth.role() = 'authenticated');
create policy "Auth write resenas" on resenas for all using (auth.role() = 'authenticated');
create policy "Auth write textos" on textos_generales for all using (auth.role() = 'authenticated');
create policy "Auth write storage" on storage.objects for all using (auth.role() = 'authenticated');
