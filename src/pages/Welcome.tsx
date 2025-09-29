import { StyledBarChart } from "@/components/charts/StyledBarChart";

function Welcome() {
  return (
    <main className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4 gap-8">
      {/* Card 1: Bar Chart */}
      <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Reporte Semestral Comparativo
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Análisis de Ventas vs. Gastos
          </p>
        </div>
        <div className="h-[500px]">
          <StyledBarChart />
        </div>
      </div>
    </main>
  );
}
export default Welcome;
