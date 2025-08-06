import { KPICard } from "./KPICard";
import { PerformanceChart } from "./PerformanceChart";
import { StatusDistributionChart } from "./StatusDistributionChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for SGP (Sistema de Gestão de Pavimento)
const sgpKPIs = [
  {
    title: "IGG Médio",
    value: 3.2,
    change: -2.3,
    trend: 'down' as const,
    status: 'warning' as const,
    unit: "/5.0",
    subtitle: "Meta: ≥ 3.5"
  },
  {
    title: "IRI Médio",
    value: 2.8,
    change: 8.5,
    trend: 'up' as const,
    status: 'danger' as const,
    unit: "m/km",
    subtitle: "Meta: ≤ 2.5"
  },
  {
    title: "Trechos Classe A",
    value: 24,
    change: -12.0,
    trend: 'down' as const,
    status: 'warning' as const,
    unit: "%",
    subtitle: "78 km de 328 km"
  },
  {
    title: "Economia Manutenção",
    value: 15,
    change: 23.0,
    trend: 'up' as const,
    status: 'success' as const,
    unit: "%",
    subtitle: "R$ 1.2M poupados"
  }
];

const iggEvolutionData = [
  { month: "Jan/23", real: 3.8, predicted: 3.7 },
  { month: "Mar/23", real: 3.7, predicted: 3.6 },
  { month: "Mai/23", real: 3.6, predicted: 3.5 },
  { month: "Jul/23", real: 3.4, predicted: 3.4 },
  { month: "Set/23", real: 3.3, predicted: 3.3 },
  { month: "Nov/23", real: 3.2, predicted: 3.2 },
  { month: "Jan/24", real: 3.2, predicted: 3.1 },
  { month: "Mar/24", real: 0, predicted: 3.0 },
  { month: "Mai/24", real: 0, predicted: 2.9 },
  { month: "Jul/24", real: 0, predicted: 2.8 }
];

const iriEvolutionData = [
  { month: "Jan/23", real: 2.1, predicted: 2.2 },
  { month: "Mar/23", real: 2.3, predicted: 2.3 },
  { month: "Mai/23", real: 2.4, predicted: 2.4 },
  { month: "Jul/23", real: 2.6, predicted: 2.5 },
  { month: "Set/23", real: 2.7, predicted: 2.6 },
  { month: "Nov/23", real: 2.8, predicted: 2.7 },
  { month: "Jan/24", real: 2.8, predicted: 2.8 },
  { month: "Mar/24", real: 0, predicted: 2.9 },
  { month: "Mai/24", real: 0, predicted: 3.0 },
  { month: "Jul/24", real: 0, predicted: 3.1 }
];

const classDistributionData = [
  { name: "Classe A (IGG ≥ 4.0)", value: 78, color: "#10B981" },
  { name: "Classe B (3.0 ≤ IGG < 4.0)", value: 134, color: "#F59E0B" },
  { name: "Classe C (2.0 ≤ IGG < 3.0)", value: 89, color: "#EF4444" },
  { name: "Classe D (IGG < 2.0)", value: 27, color: "#8B5CF6" }
];

export function SGPDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sgpKPIs.map((kpi, index) => (
          <KPICard key={index} data={kpi} />
        ))}
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart
          title="Evolução do IGG (Índice de Gravidade Global)"
          data={iggEvolutionData}
          yAxisLabel="IGG"
        />
        
        <PerformanceChart
          title="Evolução do IRI (Índice de Irregularidade Internacional)"
          data={iriEvolutionData}
          yAxisLabel="IRI (m/km)"
        />
      </div>

      {/* Distribution and Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Distribuição por Classe de Desempenho"
          data={classDistributionData}
        />
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Mapa de Calor - Estado do Pavimento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Simulated heat map data */}
              <div className="grid grid-cols-10 gap-1">
                {Array.from({ length: 50 }, (_, i) => {
                  const intensity = Math.random();
                  let bgColor = 'bg-success';
                  if (intensity > 0.7) {
                    bgColor = 'bg-danger';
                  } else if (intensity > 0.4) {
                    bgColor = 'bg-warning';
                  }
                  
                  return (
                    <div 
                      key={i}
                      className={`h-6 rounded ${bgColor} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                      title={`KM ${i * 6.5 + 10} - IGG: ${(5 - intensity * 3).toFixed(1)}`}
                    />
                  );
                })}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">KM 10</span>
                <span className="text-muted-foreground">KM 328</span>
              </div>
              
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-success rounded"></div>
                  <span>IGG maior ou igual 3.5</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-warning rounded"></div>
                  <span>IGG entre 2.5 e 3.5</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-danger rounded"></div>
                  <span>IGG menor que 2.5</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Maintenance Optimization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Otimização de Manutenção</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">R$ 8.5M</div>
              <div className="text-sm text-muted-foreground">Custos Evitados</div>
              <div className="text-xs text-muted-foreground">Manutenção preventiva</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-success">+2.3 anos</div>
              <div className="text-sm text-muted-foreground">Vida Útil Estendida</div>
              <div className="text-xs text-muted-foreground">Média da malha</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-warning">89%</div>
              <div className="text-sm text-muted-foreground">Aderência do Modelo</div>
              <div className="text-xs text-muted-foreground">Acurácia preditiva</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}