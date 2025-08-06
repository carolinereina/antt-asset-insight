import { KPICard } from "./KPICard";
import { PerformanceChart } from "./PerformanceChart";
import { StatusDistributionChart } from "./StatusDistributionChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for SGS (Sistema de Gestão de Sinalização)
const sgsKPIs = [
  {
    title: "Retrorefletividade Adequada",
    value: 87,
    change: 3.2,
    trend: 'up' as const,
    status: 'success' as const,
    unit: "%",
    subtitle: "Meta: ≥ 85%"
  },
  {
    title: "Placas com Legibilidade",
    value: 92,
    change: -1.5,
    trend: 'down' as const,
    status: 'warning' as const,
    unit: "%",
    subtitle: "1.247 de 1.356 placas"
  },
  {
    title: "Defensas Íntegras",
    value: 96,
    change: 2.1,
    trend: 'up' as const,
    status: 'success' as const,
    unit: "%",
    subtitle: "124 km de 129 km"
  },
  {
    title: "Redução Acidentes",
    value: 18,
    change: 25.3,
    trend: 'up' as const,
    status: 'success' as const,
    unit: "%",
    subtitle: "Comparado a 2023"
  }
];

const retroreflectivityData = [
  { month: "Jan/23", real: 85, predicted: 84 },
  { month: "Mar/23", real: 86, predicted: 85 },
  { month: "Mai/23", real: 87, predicted: 86 },
  { month: "Jul/23", real: 88, predicted: 87 },
  { month: "Set/23", real: 89, predicted: 88 },
  { month: "Nov/23", real: 87, predicted: 87 },
  { month: "Jan/24", real: 87, predicted: 86 },
  { month: "Mar/24", real: 0, predicted: 85 },
  { month: "Mai/24", real: 0, predicted: 84 },
  { month: "Jul/24", real: 0, predicted: 83 }
];

const signDistributionData = [
  { name: "Excelente", value: 867, color: "#10B981" },
  { name: "Bom", value: 312, color: "#F59E0B" },
  { name: "Regular", value: 134, color: "#EF4444" },
  { name: "Crítico", value: 43, color: "#8B5CF6" }
];

const maintenanceQueue = [
  { km: "KM 45", type: "Placa", priority: "Alta", estimate: "2 dias" },
  { km: "KM 78", type: "Pintura", priority: "Média", estimate: "1 semana" },
  { km: "KM 102", type: "Defensa", priority: "Alta", estimate: "3 dias" },
  { km: "KM 156", type: "Placa", priority: "Baixa", estimate: "2 semanas" },
  { km: "KM 234", type: "Pintura", priority: "Média", estimate: "1 semana" }
];

export function SGSDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sgsKPIs.map((kpi, index) => (
          <KPICard 
            key={index} 
            title={kpi.title}
            value={kpi.value + (kpi.unit || '')}
            trend={{ value: kpi.change || 0, isPositive: kpi.trend === 'up' }}
            subtitle={kpi.subtitle}
            variant={kpi.status === 'success' ? 'success' : kpi.status === 'warning' ? 'warning' : 'neutral'}
          />
        ))}
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart
          title="Evolução da Retrorefletividade (%)"
          data={retroreflectivityData}
          yAxisLabel="Retrorefletividade (%)"
        />
        
        <StatusDistributionChart
          title="Estado da Sinalização por Categoria"
          data={signDistributionData}
        />
      </div>

      {/* Maintenance and Safety */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Maintenance Queue */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Fila de Manutenção</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {maintenanceQueue.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge variant={
                      item.priority === 'Alta' ? 'destructive' :
                      item.priority === 'Média' ? 'default' : 'secondary'
                    }>
                      {item.priority}
                    </Badge>
                    <div>
                      <div className="font-medium">{item.km}</div>
                      <div className="text-sm text-muted-foreground">{item.type}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.estimate}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Impact */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Impacto na Segurança Viária</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gradient-success rounded-lg text-success-foreground">
                  <div className="text-2xl font-bold">-18%</div>
                  <div className="text-sm">Acidentes Noturnos</div>
                </div>
                <div className="text-center p-3 bg-gradient-success rounded-lg text-success-foreground">
                  <div className="text-2xl font-bold">-25%</div>
                  <div className="text-sm">Saídas de Pista</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Visibilidade Noturna</span>
                  <span className="text-sm font-medium text-success">+34%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tempo de Reação</span>
                  <span className="text-sm font-medium text-success">+1.2s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Satisfação Usuários</span>
                  <span className="text-sm font-medium text-success">4.2/5.0</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Optimization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Otimização de Custos de Sinalização</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">R$ 2.1M</div>
              <div className="text-sm text-muted-foreground">Orçamento Anual</div>
              <div className="text-xs text-muted-foreground">Sinalização</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-success">R$ 340K</div>
              <div className="text-sm text-muted-foreground">Economia</div>
              <div className="text-xs text-muted-foreground">Manutenção preventiva</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-warning">+15%</div>
              <div className="text-sm text-muted-foreground">Vida Útil</div>
              <div className="text-xs text-muted-foreground">Placas e pinturas</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">91%</div>
              <div className="text-sm text-muted-foreground">Execução</div>
              <div className="text-xs text-muted-foreground">Orçamento utilizado</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}