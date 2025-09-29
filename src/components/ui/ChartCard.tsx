import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import React from "react";

interface ChartCardProps {
  title: string;
  description: string;
  children: (isVisible: boolean) => React.ReactNode;
}

export const ChartCard = ({ title, description, children }: ChartCardProps) => {
  // El umbral de 0.8 significa que el 80% del componente debe estar visible para activarse.
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.8 });

  return (
    <div
      ref={ref}
      className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl"
    >
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {description}
        </p>
      </div>
      {/* El div contenedor necesita una altura mínima mientras carga */}
      <div className="h-[500px]">
        {/* Pasamos el estado isVisible al hijo */}
        {children(isVisible)}
      </div>
    </div>
  );
};
