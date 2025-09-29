import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Función `cn` para combinar clases de Tailwind CSS de forma segura.
 * Esencial al usar `shadcn/ui` o para construir componentes con variantes.
 * @param inputs - Clases de CSS a combinar.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Simula un retraso para pruebas de estados de carga.
 * @param duration - Duración del retraso en milisegundos.
 */
export const sleep = (duration: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
