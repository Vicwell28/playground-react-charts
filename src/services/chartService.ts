import type { ChartData, SectorData, TimeSeriesData } from "@/types";

const mockData: ChartData[] = [
  { name: "Enero", ventas: 40000000, gastos: 24000000 },
  { name: "Febrero", ventas: 30000000, gastos: 13980000 },
  { name: "Marzo", ventas: 50000000, gastos: 98000000 },
  { name: "Abril", ventas: 27800000, gastos: 39080000 },
  { name: "Mayo", ventas: 18900000, gastos: 48000000 },
  { name: "Junio", ventas: 23900000, gastos: 38000000 },
];

/**
 * Simula una llamada a una API para obtener los datos de la gráfica.
 */
export const getChartData = (): Promise<ChartData[]> => {
  console.log("Fetching chart data...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 10% de probabilidad de error para simulación
      if (Math.random() < 0.1) {
        console.error("Simulated API error.");
        reject(new Error("No se pudieron cargar los datos del gráfico."));
      } else {
        console.log("Chart data fetched successfully.");
        resolve(mockData);
      }
    }, 1500); // Retraso de 1.5 segundos para simular la carga
  });
};

// --- DATOS Y SERVICIO PARA GRÁFICA DE BARRAS ---
const barChartMockData: ChartData[] = [
  { name: "Enero", ventas: 40000000, gastos: 24000000 },
  { name: "Febrero", ventas: 30000000, gastos: 13980000 },
  // ... (otros meses)
];

export const getBarChartData = (): Promise<ChartData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1)
        reject(new Error("Error al cargar datos de ventas."));
      else resolve(barChartMockData);
    }, 1200);
  });
};

// --- DATOS Y SERVICIO PARA GRÁFICA DE PASTEL ---
const pieChartMockData: SectorData[] = [
  { name: "Servicios", value: 62 },
  { name: "Industria", value: 28 },
  { name: "Agricultura", value: 4 },
  { name: "Otros", value: 6 },
];

export const getSectorDistributionData = (): Promise<SectorData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(pieChartMockData), 1800);
  });
};

// --- DATOS Y SERVICIO PARA GRÁFICA DE LÍNEA ---
const lineChartMockData: TimeSeriesData[] = [
  { date: "2024-01", value: 2.1 },
  { date: "2024-04", value: 2.3 },
  { date: "2024-07", value: 2.5 },
  { date: "2024-10", value: 2.4 },
  { date: "2025-01", value: 2.7 },
  { date: "2025-04", value: 2.8 },
];

export const getGDPTimeSeriesData = (): Promise<TimeSeriesData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(lineChartMockData), 2000);
  });
};
