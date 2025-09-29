import { useState, useEffect, useCallback } from "react";

// Define el estado para el hook
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Hook personalizado para obtener datos de una función de servicio.
 * Maneja los estados de carga, error y datos de forma automática.
 * @param serviceFunction - La función del servicio que devuelve una promesa con los datos.
 * @param params - Parámetros opcionales para pasar a la función del servicio.
 */
export function useFetchData<T>(
  serviceFunction: (...args: any[]) => Promise<T>,
  ...params: any[]
) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const response = await serviceFunction(...params);
      setState({
        data: response,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setState({
        data: null,
        loading: false,
        error:
          error instanceof Error
            ? error
            : new Error("An unknown error occurred"),
      });
    }
  }, [serviceFunction, ...params]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch: fetchData };
}
