import type { TooltipProps } from "recharts";

const COLORS = {
  Ventas: "#3b82f6",
  Gastos: "#ec4899",
};

export const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
        <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
          {label}
        </p>

        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2 mt-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor:
                  COLORS[entry.name as keyof typeof COLORS] ?? "#999",
              }}
            />
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {`${entry.name}: `}
              <span className="font-medium text-gray-800 dark:text-gray-200 ml-1.5">
                {entry.value.toLocaleString("es-MX", {
                  style: "currency",
                  currency: "MXN",
                })}
              </span>
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
