interface CustomLegendProps {
  payload?: { dataKey: string; value: string }[];
  onToggle: (dataKey: string) => void;
  visibleSeries: Set<string>;
}

const COLORS: { [key: string]: string } = {
  Ventas: "#3b82f6",
  Gastos: "#ec4899",
};

export const CustomLegend = ({
  payload,
  onToggle,
  visibleSeries,
}: CustomLegendProps) => {
  return (
    <div className="flex items-center justify-center gap-6 mt-4">
      {payload?.map((entry) => {
        const { dataKey, value } = entry;
        const isVisible = visibleSeries.has(dataKey);

        return (
          <div
            key={`item-${dataKey}`}
            onClick={() => onToggle(dataKey)}
            className={`flex items-center gap-2 cursor-pointer transition-opacity ${
              isVisible ? "opacity-100" : "opacity-40"
            }`}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[value] }}
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {value}
            </span>
          </div>
        );
      })}
    </div>
  );
};
