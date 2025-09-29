/**
 * Formatea un número como moneda mexicana (MXN).
 * @param value - El valor numérico a formatear.
 * @param options - Opciones adicionales para Intl.NumberFormat.
 */
export function formatCurrencyMXN(
  value: number,
  options: Intl.NumberFormatOptions = {}
): string {
  const defaultOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  };
  return new Intl.NumberFormat("es-MX", defaultOptions).format(value);
}

/**
 * Formatea un número como un porcentaje.
 * @param value - El valor numérico (ej. 0.75 para 75%).
 * @param options - Opciones adicionales para Intl.NumberFormat.
 */
export function formatPercentage(
  value: number,
  options: Intl.NumberFormatOptions = {}
): string {
  const defaultOptions: Intl.NumberFormatOptions = {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    ...options,
  };
  return new Intl.NumberFormat("es-MX", defaultOptions).format(value);
}

/**
 * Formatea un número con separadores de miles para mejor legibilidad.
 * @param value - El valor numérico.
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("es-MX").format(value);
}

/**
 * Formatea una fecha a un formato corto (ej. "31/12/2024").
 * @param date - El objeto Date o un string de fecha válido.
 */
export function formatDateShort(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("es-MX", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(dateObj);
}

export const formatAxisValue = (value: number): string => {
  if (value >= 1000000) return `$${value / 1000000}M`;
  return `$${value / 1000}k`;
};

export const formatBarLabelValue = (value: number): string => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
  return `${value}`;
};
