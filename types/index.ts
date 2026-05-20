export type Salida = {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  ubicacion: string;
  cupos_total: number;
  cupos_disponibles: number;
  imagen_url: string | null;
  activa: boolean;
  created_at: string;
};

export type Resena = {
  id: string;
  nombre: string;
  ciudad: string;
  texto: string;
  experiencia: string;
  rating: number;
  activa: boolean;
  created_at: string;
};

export type TextoGeneral = {
  id: string;
  clave: string;
  valor: string;
  descripcion: string;
};
