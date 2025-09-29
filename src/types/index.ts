/**
 * Estructura genérica para una respuesta de API.
 */
export interface ApiResponse<T> {
  data: T;
  metadata: {
    timestamp: string;
    source: string;
    version: string;
  };
}

/**
 * Tipo para un punto de datos en una gráfica de series de tiempo.
 */
export interface TimeSeriesDataPoint {
  date: string; // Formato YYYY-MM-DD
  value: number;
}

/**
 * Tipo para datos de población por estado.
 */
export interface StatePopulation {
  stateCode: string; // e.g., 'JAL'
  stateName: string; // e.g., 'Jalisco'
  population: number;
}

/**
 * Tipo para un indicador económico clave (KPI).
 */
export interface EconomicIndicator {
  id: string;
  name: string; // ej. "Inflación Anual", "Tasa de Desempleo"
  value: number;
  unit: "percentage" | "currency" | "number";
  change: number; // Cambio porcentual o absoluto respecto al periodo anterior
  period: string; // ej. "Q3 2024"
}

/**
 * Tipo para datos de una gráfica de categorías.
 */
export interface CategoricalDataPoint {
  name: string; // Nombre de la categoría
  value: number;
}

// Gráfica de Barras
export interface ChartData {
  name: string;
  ventas: number;
  gastos: number;
}

// Gráfica de Pastel (Pie)
export interface SectorData {
  name: string;
  value: number;
}

// Gráfica de Línea/Área
export interface TimeSeriesData {
  date: string;
  value: number;
}
