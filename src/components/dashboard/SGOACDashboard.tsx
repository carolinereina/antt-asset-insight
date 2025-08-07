import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

const mockOACConditionData = [
  { period: '2023 Q1', real: 4.0, predicted: 3.9 },
  { period: '2023 Q2', real: 3.8, predicted: 3.8 },
  { period: '2023 Q3', real: 3.6, predicted: 3.7 },
  { period: '2023 Q4', real: 3.2, predicted: 3.4 },
  { period: '2024 Q1', real: 3.0, predicted: 3.1 },
  { period: '2024 Q2', real: 2.8, predicted: 2.9 },
  { period: '2024 Q3', real: 2.6, predicted: 2.7 },
  { period: '2024 Q4', real: 2.4, predicted: 2.5 },
  { period: '2025 Q1', real: 2.2, predicted: 2.3 },
  { period: '2025 Q2', real: 2.0, predicted: 2.1 },
  { period: '2025 Q3', real: 1.8, predicted: 1.9 },
  { period: '2025 Q4', real: 1.6, predicted: 1.7 },
  { period: '2026 Q1', predicted: 1.5 },
  { period: '2026 Q2', predicted: 1.3 },
  { period: '2026 Q3', predicted: 1.1 },
  { period: '2026 Q4', predicted: 0.9 },
  { period: '2027 Q1', predicted: 0.7 },
  { period: '2027 Q2', predicted: 0.5 },
  { period: '2027 Q3', predicted: 0.3 },
  { period: '2027 Q4', predicted: 0.1 },
];

const mockDrainageData = [
  { period: '2023 Q1', real: 95, predicted: 94 },
  { period: '2023 Q2', real: 93, predicted: 93 },
  { period: '2023 Q3', real: 91, predicted: 92 },
  { period: '2023 Q4', real: 88, predicted: 89 },
  { period: '2024 Q1', real: 86, predicted: 87 },
  { period: '2024 Q2', real: 84, predicted: 85 },
  { period: '2024 Q3', real: 82, predicted: 83 },
  { period: '2024 Q4', real: 85, predicted: 84 },
  { period: '2025 Q1', real: 87, predicted: 86 },
  { period: '2025 Q2', real: 90, predicted: 89 },
  { period: '2025 Q3', real: 92, predicted: 91 },
  { period: '2025 Q4', real: 94, predicted: 93 },
  { period: '2026 Q1', predicted: 91 },
  { period: '2026 Q2', predicted: 88 },
  { period: '2026 Q3', predicted: 85 },
  { period: '2026 Q4', predicted: 82 },
  { period: '2027 Q1', predicted: 79 },
  { period: '2027 Q2', predicted: 76 },
  { period: '2027 Q3', predicted: 73 },
  { period: '2027 Q4', predicted: 70 },
];

const oacConditionParameter = {
  name: 'Estado de Conservação',
  unit: '',
  range: { min: 0, max: 5 },
  thresholds: { good: 3.5, regular: 2.5 }
};

const drainageParameter = {
  name: 'Eficiência da Drenagem',
  unit: '%',
  range: { min: 0, max: 100 },
  thresholds: { good: 85, regular: 70 }
};

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
          data={mockOACConditionData}
          parameter={oacConditionParameter}
          assetName="Obras de Arte Correntes (324 unidades)"
        />
        
        <AssetPredictionChart
          title="Eficiência do Sistema de Drenagem"
          data={mockDrainageData}
          parameter={drainageParameter}
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