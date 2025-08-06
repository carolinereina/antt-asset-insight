import { KPICard } from "./KPICard";
import { PerformanceChart } from "./PerformanceChart";
import { StatusDistributionChart } from "./StatusDistributionChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, TrendingUp, Shield, DollarSign } from "lucide-react";

// Mock data for demonstration
const executiveKPIs = [
  {
    title: "IGG Médio da Malha",
    value: 3.2,
    change: -2.3,
    trend: 'down' as const,
    status: 'warning' as const,
    unit: "/5.0",
    subtitle: "Meta: ≥ 3.5"
  },
  {
    title: "OAEs em Estado Crítico",
    value: 8,
    change: 12.5,
    trend: 'up' as const,
    status: 'danger' as const,
    unit: "%",
    subtitle: "15 de 187 OAEs"
  },
  {
    title: "Sinalização Adequada",
    value: 87,
    change: 3.2,
    trend: 'up' as const,
    status: 'success' as const,
    unit: "%",
    subtitle: "Retrorefletividade"
  },
  {
    title: "Conformidade ANTT",
    value: 94,
    change: 1.8,
    trend: 'up' as const,
    status: 'success' as const,
    unit: "%",
    subtitle: "Requisitos atendidos"
  }
];

const iggData = [
  { month: "Jan/23", real: 3.8, predicted: 3.7, target: 3.5 },
  { month: "Mar/23", real: 3.7, predicted: 3.6, target: 3.5 },
  { month: "Mai/23", real: 3.6, predicted: 3.5, target: 3.5 },
  { month: "Jul/23", real: 3.4, predicted: 3.4, target: 3.5 },
  { month: "Set/23", real: 3.3, predicted: 3.3, target: 3.5 },
  { month: "Nov/23", real: 3.2, predicted: 3.2, target: 3.5 },
  { month: "Jan/24", real: 3.2, predicted: 3.1, target: 3.5 },
  { month: "Mar/24", real: 0, predicted: 3.0, target: 3.5 },
  { month: "Mai/24", real: 0, predicted: 2.9, target: 3.5 },
  { month: "Jul/24", real: 0, predicted: 2.8, target: 3.5 }
];

const assetStatusData = [
  { name: "Excelente (A)", value: 45, color: "#10B981" },
  { name: "Bom (B)", value: 82, color: "#F59E0B" },
  { name: "Regular (C)", value: 134, color: "#EF4444" },
  { name: "Ruim (D)", value: 67, color: "#8B5CF6" }
];

const criticalAlerts = [
  {
    type: "danger",
    icon: AlertCircle,
    title: "OAE BR-101 KM 245",
    description: "Estrutura apresenta fissuras críticas - Inspeção urgente necessária"
  },
  {
    type: "warning", 
    icon: TrendingUp,
    title: "Trecho KM 180-190",
    description: "IGG previsto para atingir nível crítico em 6 meses"
  },
  {
    type: "warning",
    icon: Shield,
    title: "Sinalização KM 95-105",
    description: "Retrorefletividade abaixo do limite em 40% das placas"
  }
];

export function ExecutiveSummary() {
  return (
    <div className="space-y-6">
      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {executiveKPIs.map((kpi, index) => (
          <KPICard key={index} data={kpi} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart
          title="Evolução do IGG Médio da Malha"
          data={iggData}
          yAxisLabel="IGG"
          showTarget={true}
        />
        
        <StatusDistributionChart
          title="Distribuição de Trechos por Classe"
          data={assetStatusData}
        />
      </div>

      {/* Alerts and Financial Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Critical Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <AlertCircle className="text-danger" size={20} />
              Alertas Críticos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {criticalAlerts.map((alert, index) => {
              const Icon = alert.icon;
              return (
                <Alert key={index} className={`border-l-4 ${
                  alert.type === 'danger' ? 'border-l-danger' : 'border-l-warning'
                }`}>
                  <Icon className={`h-4 w-4 ${
                    alert.type === 'danger' ? 'text-danger' : 'text-warning'
                  }`} />
                  <AlertDescription>
                    <div className="font-medium">{alert.title}</div>
                    <div className="text-sm text-muted-foreground">{alert.description}</div>
                  </AlertDescription>
                </Alert>
              );
            })}
          </CardContent>
        </Card>

        {/* Financial Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <DollarSign className="text-primary" size={20} />
              Resumo Financeiro
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">R$ 12.8M</div>
                <div className="text-sm text-muted-foreground">Orçamento Anual</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-success">R$ 8.2M</div>
                <div className="text-sm text-muted-foreground">Executado (64%)</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Pavimento</span>
                <span className="font-medium">R$ 4.1M (32%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>OAEs</span>
                <span className="font-medium">R$ 2.8M (22%)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sinalização</span>
                <span className="font-medium">R$ 1.3M (10%)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Regulatory Compliance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Status de Conformidade Regulatória</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-success rounded-lg text-success-foreground">
              <div className="text-2xl font-bold">✓</div>
              <div className="text-sm font-medium">Relatórios ANTT</div>
              <div className="text-xs opacity-75">100% em dia</div>
            </div>
            <div className="text-center p-4 bg-gradient-warning rounded-lg text-warning-foreground">
              <div className="text-2xl font-bold">!</div>
              <div className="text-sm font-medium">Metas de Performance</div>
              <div className="text-xs opacity-75">2 metas pendentes</div>
            </div>
            <div className="text-center p-4 bg-gradient-success rounded-lg text-success-foreground">
              <div className="text-2xl font-bold">✓</div>
              <div className="text-sm font-medium">Licenças Ambientais</div>
              <div className="text-xs opacity-75">Todas válidas</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}