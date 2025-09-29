import { StyledBarChart } from "@/components/charts/StyledBarChart";
import { ChartCard } from "@/components/ui/ChartCard";

function Welcome() {
  return (
    <main className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-4 gap-16">
      <ChartCard
        title="Reporte Semestral Comparativo"
        description="Análisis de Ventas vs. Gastos"
      >
        {(isVisible) => <StyledBarChart isVisible={isVisible} />}
      </ChartCard>

      <ChartCard
        title="Distribución por Sector Económico"
        description="Aportación al PIB nacional"
      >
        {/* Suponiendo que has creado un StyledPieChart */}
        {(isVisible) => <StyledBarChart isVisible={isVisible} />}
      </ChartCard>

      <ChartCard
        title="Crecimiento del Producto Interno Bruto (PIB)"
        description="Variación trimestral porcentual"
      >
        {/* Suponiendo que has creado un StyledLineChart */}
        {(isVisible) => <StyledBarChart isVisible={isVisible} />}
      </ChartCard>

      <ChartCard
        title="Proyección de Crecimiento"
        description="Estimación para los próximos trimestres"
      >
        {/* Puedes reutilizar un tipo de gráfica */}
        {(isVisible) => <StyledBarChart isVisible={isVisible} />}
      </ChartCard>
    </main>
  );
}
export default Welcome;
