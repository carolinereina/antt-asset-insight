import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

const mockOACPredictionData = [
  { period: '2022 Q1', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q2', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q3', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q4', real: 2, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q1', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q2', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q3', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q4', real: 1, predicted: 2, status: 'Regular' as const },
  { period: '2024 Q1', predicted: 1, status: 'Ruim' as const },
  { period: '2024 Q2', predicted: 1, status: 'Ruim' as const },
  { period: '2024 Q3', predicted: 2, status: 'Regular' as const },
  { period: '2024 Q4', predicted: 2, status: 'Regular' as const },
];

const mockDrainageData = [
  { period: '2022 Q1', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q2', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q3', real: 2, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q4', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q1', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q2', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q3', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q4', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2024 Q1', predicted: 2, status: 'Regular' as const },
  { period: '2024 Q2', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q3', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q4', predicted: 3, status: 'Bom' as const },
];

const mockConditionDistribution = [
  { name: 'Bom Estado', value: 72, color: 'hsl(var(--success))' },
  { name: 'Regular', value: 21, color: 'hsl(var(--warning))' },
  { name: 'Requer Atenção', value: 7, color: 'hsl(var(--destructive))' },
];

export function SGOACDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="OACs Cadastradas"
          value="324"
          trend={{ value: 8, isPositive: true }}
          subtitle="Bueiros e galerias"
        />
        <KPICard
          title="Obstruções Detectadas"
          value="12"
          trend={{ value: -3, isPositive: true }}
          subtitle="Necessitam limpeza"
          variant="warning"
        />
        <KPICard
          title="Eficiência Drenagem"
          value="94%"
          trend={{ value: 2, isPositive: true }}
          subtitle="Sistema operacional"
          variant="success"
        />
        <KPICard
          title="Economia Manutenção"
          value="R$ 450K"
          trend={{ value: 12, isPositive: true }}
          subtitle="Intervenções preventivas"
        />
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetPredictionChart
          title="Estado de Conservação Geral"
          data={mockOACPredictionData}
          assetName="Obras de Arte Correntes (324 unidades)"
        />
        
        <AssetPredictionChart
          title="Eficiência do Sistema de Drenagem"
          data={mockDrainageData}
          assetName="Capacidade de Escoamento"
        />
      </div>

      {/* Condition Distribution and Maintenance Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Distribuição por Estado de Conservação"
          data={mockConditionDistribution}
        />
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Cronograma de Manutenção</h3>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Bueiro km 067</h4>
                  <p className="text-sm text-muted-foreground">Limpeza e desobstrução</p>
                </div>
                <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">Urgente</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Galeria km 134</h4>
                  <p className="text-sm text-muted-foreground">Reparo estrutural</p>
                </div>
                <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">30 dias</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Pontilhão km 198</h4>
                  <p className="text-sm text-muted-foreground">Manutenção preventiva</p>
                </div>
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">60 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}