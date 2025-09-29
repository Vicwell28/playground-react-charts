import { sleep } from "@/lib/utils";
import type { ApiResponse } from "@/types";

// URL base de tu API (puede ser una variable de entorno)
const API_BASE_URL = "https://api.datamexico.dev"; // URL de ejemplo

/**
 * Cliente de API genérico usando Fetch.
 * Puedes reemplazarlo con Axios si lo prefieres.
 * @param endpoint - El endpoint al que se hará la petición (ej. '/population/states').
 * @param options - Opciones de configuración para la petición Fetch.
 */
export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // Simula un delay para ver los estados de carga
  await sleep(500);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }

    const data: ApiResponse<T> = await response.json();
    return data.data; // Devuelve solo los datos de la respuesta
  } catch (error) {
    console.error(
      `Fallo en la llamada a la API en el endpoint: ${endpoint}`,
      error
    );
    throw error;
  }
}

/**
 * Mock de cliente de API para desarrollo sin un backend real.
 * @param mockData - Los datos que se devolverán en la simulación.
 */
export async function mockApiClient<T>(mockData: T): Promise<T> {
  await sleep(Math.random() * 800 + 200); // Simula un retraso de red variable

  // Simula un posible error de forma aleatoria
  if (Math.random() < 0.1) {
    // 10% de probabilidad de error
    throw new Error("Error de red simulado.");
  }

  console.log("Mock API call successful, returning data:", mockData);
  return mockData;
}
