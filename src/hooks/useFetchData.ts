import { useState, useEffect, useCallback } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface UseFetchDataOptions {
  enabled: boolean;
}

export function useFetchData<T>(
  serviceFunction: () => Promise<T>,
  options: UseFetchDataOptions = { enabled: true }
): FetchState<T> & { refetch: () => void } {
  const { enabled } = options;
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: enabled,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    try {
      const response = await serviceFunction();
      setState({ data: response, loading: false, error: null });
    } catch (error) {
      console.error("Error fetching data:", error);
      setState({
        data: null,
        loading: false,
        error:
          error instanceof Error
            ? error
            : new Error("Ocurrió un error desconocido"),
      });
    }
  }, [serviceFunction]);

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [enabled, fetchData]);

  return { ...state, refetch: fetchData };
}
