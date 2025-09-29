/**
 * Paleta de colores primarios para las gráficas.
 * Inspirada en colores que evocan una identidad visual moderna y profesional.
 */
export const CHART_COLORS = {
  primary: "#2563eb", // Azul primario
  secondary: "#f97316", // Naranja secundario
  tertiary: "#10b981", // Verde terciario
  accent: "#f43f5e", // Rosa/Rojo acento
  neutral: "#64748b", // Gris neutral
  background: "#f8fafc", // Fondo claro
  text: "#0f172a", // Texto principal
};

/**
 * Paleta de colores extendida para gráficas con múltiples series (ej. PieCharts, BarCharts).
 */
export const EXTENDED_PALETTE = [
  "#2563eb",
  "#f97316",
  "#10b981",
  "#f43f5e",
  "#8b5cf6",
  "#3b82f6",
  "#fbbf24",
  "#34d399",
  "#ec4899",
  "#a78bfa",
  "#60a5fa",
  "#facc15",
];

/**
 * Configuraciones por defecto para las Tooltips de Recharts.
 * Esto ayuda a mantener un estilo consistente en todas las gráficas.
 */
export const DEFAULT_TOOLTIP_STYLE = {
  backgroundColor: "#ffffff",
  borderColor: "#e2e8f0",
  borderRadius: "0.5rem",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  color: CHART_COLORS.text,
};

/**
 * Constantes para los estados de México, útiles para etiquetas o filtros.
 */
export const MEXICAN_STATES = [
  { code: "AGS", name: "Aguascalientes" },
  { code: "BC", name: "Baja California" },
  { code: "BCS", name: "Baja California Sur" },
  { code: "CAM", name: "Campeche" },
  { code: "CHP", name: "Chiapas" },
  { code: "CHH", name: "Chihuahua" },
  { code: "COA", name: "Coahuila" },
  { code: "COL", name: "Colima" },
  { code: "DUR", name: "Durango" },
  { code: "GTO", name: "Guanajuato" },
  { code: "GRO", name: "Guerrero" },
  { code: "HGO", name: "Hidalgo" },
  { code: "JAL", name: "Jalisco" },
  { code: "MEX", name: "Estado de México" },
  { code: "MCH", name: "Michoacán" },
  { code: "MOR", name: "Morelos" },
  { code: "NAY", name: "Nayarit" },
  { code: "NL", name: "Nuevo León" },
  { code: "OAX", name: "Oaxaca" },
  { code: "PUE", name: "Puebla" },
  { code: "QRO", name: "Querétaro" },
  { code: "QR", name: "Quintana Roo" },
  { code: "SLP", name: "San Luis Potosí" },
  { code: "SIN", name: "Sinaloa" },
  { code: "SON", name: "Sonora" },
  { code: "TAB", name: "Tabasco" },
  { code: "TAM", name: "Tamaulipas" },
  { code: "TLX", name: "Tlaxcala" },
  { code: "VER", name: "Veracruz" },
  { code: "YUC", name: "Yucatán" },
  { code: "ZAC", name: "Zacatecas" },
  { code: "CDMX", name: "Ciudad de México" },
];
