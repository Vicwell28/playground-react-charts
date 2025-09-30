import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Label,
  Cell,
} from "recharts";
import { CustomTooltip } from "@/components/charts/CustomTooltip";
import { CustomBarLabel } from "@/components/charts/CustomBarLabel";
import { CustomLegend } from "@/components/charts/CustomLegend";
import { ChartSkeleton } from "./ChartSkeleton";
import { formatAxisValue } from "@/lib/formatters";
import type { ChartData } from "@/types";
import { getChartData } from "@/services/chartService";
import { useFetchData } from "@/hooks/useFetchData";
interface StyledBarChartProps {
  isVisible: boolean;
}

export const StyledBarChart = ({ isVisible }: StyledBarChartProps) => {
  const {
    data: chartData,
    loading,
    error,
    refetch,
  } = useFetchData(getChartData, { enabled: isVisible });
  const [visibleSeries, setVisibleSeries] = useState(
    new Set(["ventas", "gastos"])
  );
  const [focusedBar, setFocusedBar] = useState<string | null>(null);

  const handleLegendToggle = (dataKey: string) => {
    const newVisibleSeries = new Set(visibleSeries);
    if (newVisibleSeries.has(dataKey)) {
      newVisibleSeries.delete(dataKey);
    } else {
      newVisibleSeries.add(dataKey);
    }
    setVisibleSeries(newVisibleSeries);
  };

  const handleBarClick = (data: ChartData) => {
    if (data && data.name) {
      setFocusedBar(focusedBar === data.name ? null : data.name);
    }
  };

  if (loading) {
    return <ChartSkeleton />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-red-500">
        <p className="font-semibold">¡Ups! Algo salió mal.</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {error.message}
        </p>
        <button
          onClick={refetch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (!chartData || chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        No hay datos para mostrar.
      </div>
    );
  }

  return (
    <div onMouseDown={() => setFocusedBar(null)} className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 30, right: 10, left: 0, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ec4899" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#ec4899" stopOpacity={0.3} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e0e0e0"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={formatAxisValue}
            domain={[
              0,
              (dataMax: number) =>
                Math.round((dataMax * 1.25) / 10000000) * 10000000,
            ]}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(238, 242, 255, 0.6)" }}
          />
          <Legend
            content={
              <CustomLegend
                onToggle={handleLegendToggle}
                visibleSeries={visibleSeries}
              />
            }
          />

          <ReferenceLine y={40000000} stroke="#f59e0b" strokeDasharray="3 3">
            <Label
              value="Meta de Ventas"
              position="insideTopLeft"
              fill="#f59e0b"
              fontSize={12}
              dy={-20}
              dx={500}
            />
          </ReferenceLine>

          <Bar
            dataKey="ventas"
            hide={!visibleSeries.has("ventas")}
            fill="url(#colorVentas)"
            radius={[4, 4, 0, 0]}
            name="Ventas"
            label={<CustomBarLabel value={0} width={0} x={0} y={0} />}
            isAnimationActive
            animationDuration={800}
            onClick={handleBarClick}
            className="cursor-pointer"
          >
            {chartData.map((entry) => (
              <Cell
                key={`cell-${entry.name}`}
                fillOpacity={focusedBar && focusedBar !== entry.name ? 0.3 : 1}
              />
            ))}
          </Bar>
          <Bar
            dataKey="gastos"
            hide={!visibleSeries.has("gastos")}
            fill="url(#colorGastos)"
            radius={[4, 4, 0, 0]}
            name="Gastos"
            label={<CustomBarLabel value={0} width={0} x={0} y={0} />}
            isAnimationActive
            animationDuration={800}
            onClick={handleBarClick}
            className="cursor-pointer"
          >
            {chartData.map((entry) => (
              <Cell
                key={`cell-${entry.name}`}
                fillOpacity={focusedBar && focusedBar !== entry.name ? 0.3 : 1}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
