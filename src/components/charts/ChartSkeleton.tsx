export const ChartSkeleton = () => {
  return (
    <div
      className="w-full h-full p-4 animate-pulse"
      aria-label="Cargando datos del gráfico"
    >
      {/* Eje Y + Barras */}
      <div className="h-5/6 flex items-end gap-4">
        {/* Etiquetas del Eje Y */}
        <div className="w-12 h-full flex flex-col justify-between">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        {/* Barras del Gráfico */}
        <div className="flex-1 h-full flex items-end justify-around gap-2">
          <div className="w-full h-3/4 bg-gray-200 dark:bg-gray-700 rounded-t-md"></div>
          <div className="w-full h-1/2 bg-gray-200 dark:bg-gray-700 rounded-t-md"></div>
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-t-md"></div>
          <div className="w-full h-2/3 bg-gray-200 dark:bg-gray-700 rounded-t-md"></div>
          <div className="w-full h-1/3 bg-gray-200 dark:bg-gray-700 rounded-t-md"></div>
          <div className="w-full h-5/6 bg-gray-200 dark:bg-gray-700 rounded-t-md"></div>
        </div>
      </div>
      {/* Eje X */}
      <div className="h-1/6 flex items-end justify-around gap-2 pl-12 pt-2">
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};
