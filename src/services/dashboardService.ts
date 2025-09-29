import { mockApiClient } from "./api";
import type {
  StatePopulation,
  EconomicIndicator,
  TimeSeriesDataPoint,
  CategoricalDataPoint,
} from "@/types";

/**
 * Obtiene datos simulados de población por estado.
 */
export const getPopulationByState = (): Promise<StatePopulation[]> => {
  const mockData: StatePopulation[] = [
    { stateCode: "MEX", stateName: "Estado de México", population: 17400000 },
    { stateCode: "CDMX", stateName: "Ciudad de México", population: 9300000 },
    { stateCode: "JAL", stateName: "Jalisco", population: 8600000 },
    { stateCode: "VER", stateName: "Veracruz", population: 8100000 },
    { stateCode: "PUE", stateName: "Puebla", population: 6700000 },
    { stateCode: "GTO", stateName: "Guanajuato", population: 6300000 },
    { stateCode: "NL", stateName: "Nuevo León", population: 5900000 },
  ];
  return mockApiClient(mockData);
};

/**
 * Obtiene indicadores económicos clave simulados.
 */
export const getEconomicIndicators = (): Promise<EconomicIndicator[]> => {
  const mockData: EconomicIndicator[] = [
    {
      id: "inflation",
      name: "Inflación Anual",
      value: 0.045,
      unit: "percentage",
      change: 0.002,
      period: "Agosto 2025",
    },
    {
      id: "unemployment",
      name: "Tasa de Desempleo",
      value: 0.031,
      unit: "percentage",
      change: -0.001,
      period: "Q2 2025",
    },
    {
      id: "gdp_growth",
      name: "Crecimiento PIB",
      value: 0.028,
      unit: "percentage",
      change: 0.005,
      period: "Q2 2025",
    },
    {
      id: "min_wage",
      name: "Salario Mínimo Diario",
      value: 248.93,
      unit: "currency",
      change: 20.0,
      period: "2025",
    },
  ];
  return mockApiClient(mockData);
};

/**
 * Obtiene datos simulados de series de tiempo para el crecimiento del PIB.
 */
export const getGDPTimeSeries = (): Promise<TimeSeriesDataPoint[]> => {
  const mockData: TimeSeriesDataPoint[] = [
    { date: "2024-01-01", value: 2.1 },
    { date: "2024-04-01", value: 2.3 },
    { date: "2024-07-01", value: 2.5 },
    { date: "2024-10-01", value: 2.4 },
    { date: "2025-01-01", value: 2.7 },
    { date: "2025-04-01", value: 2.8 },
  ];
  return mockApiClient(mockData);
};

/**
 * Obtiene datos simulados de distribución sectorial.
 */
export const getSectorDistribution = (): Promise<CategoricalDataPoint[]> => {
  const mockData: CategoricalDataPoint[] = [
    { name: "Servicios", value: 62 },
    { name: "Industria", value: 28 },
    { name: "Agricultura", value: 4 },
    { name: "Otros", value: 6 },
  ];
  return mockApiClient(mockData);
};
