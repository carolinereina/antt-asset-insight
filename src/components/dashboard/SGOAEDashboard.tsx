import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

// Nota Técnica das OAEs (0-5)
const mockOAEConditionData = [
  { period: '2022 Q1', real: 4.2, predicted: 4.1 },
  { period: '2022 Q2', real: 4.0, predicted: 4.0 },
  { period: '2022 Q3', real: 3.8, predicted: 3.9 },
  { period: '2022 Q4', real: 3.5, predicted: 3.6 },
  { period: '2023 Q1', real: 3.3, predicted: 3.4 },
  { period: '2023 Q2', real: 2.9, predicted: 3.1 },
  { period: '2023 Q3', real: 2.7, predicted: 2.8 },
  { period: '2023 Q4', real: 2.8, predicted: 2.6 },
  { period: '2024 Q1', predicted: 2.5 },
  { period: '2024 Q2', predicted: 2.8 },
  { period: '2024 Q3', predicted: 3.1 },
  { period: '2024 Q4', predicted: 3.4 },
];

// Estado de Conservação Elementos Estruturais (0-5)
const mockStructuralData = [
  { period: '2022 Q1', real: 4.5, predicted: 4.4 },
  { period: '2022 Q2', real: 4.3, predicted: 4.3 },
  { period: '2022 Q3', real: 4.1, predicted: 4.1 },
  { period: '2022 Q4', real: 3.8, predicted: 3.9 },
  { period: '2023 Q1', real: 3.6, predicted: 3.7 },
  { period: '2023 Q2', real: 3.4, predicted: 3.5 },
  { period: '2023 Q3', real: 3.2, predicted: 3.3 },
  { period: '2023 Q4', real: 3.1, predicted: 3.1 },
  { period: '2024 Q1', predicted: 2.9 },
  { period: '2024 Q2', predicted: 2.7 },
  { period: '2024 Q3', predicted: 2.5 },
  { period: '2024 Q4', predicted: 2.3 },
];

const oaeConditionParameter = {
  name: 'Nota Técnica das OAEs',
  unit: '',
  range: { min: 0, max: 5 },
  thresholds: { good: 3.5, regular: 2.5 }
};

const structuralParameter = {
  name: 'Estado de Conservação Estrutural',
  unit: '',
  range: { min: 0, max: 5 },
  thresholds: { good: 3.5, regular: 2.5 }
};

const mockRiskDistribution = [
  { name: 'Baixo Risco', value: 65, color: 'hsl(var(--success))' },
  { name: 'Médio Risco', value: 25, color: 'hsl(var(--warning))' },
  { name: 'Alto Risco', value: 10, color: 'hsl(var(--destructive))' },
];

export function SGOAEDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="OAEs Monitoradas"
          value="47"
          trend={{ value: 2, isPositive: true }}
          subtitle="Total de estruturas"
        />
        <KPICard
          title="Estado Crítico"
          value="4"
          trend={{ value: -1, isPositive: true }}
          subtitle="OAEs em risco"
          variant="warning"
        />
        <KPICard
          title="Economia Prevista"
          value="R$ 2,8M"
          trend={{ value: 15, isPositive: true }}
          subtitle="Manutenção preventiva"
          variant="success"
        />
        <KPICard
          title="Aderência do Modelo"
          value="91%"
          trend={{ value: 3, isPositive: true }}
          subtitle="Precisão das predições"
        />
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetPredictionChart
          title="Condição Geral das OAEs"
          data={mockOAEConditionData}
          parameter={oaeConditionParameter}
          assetName="Pontes e Viadutos (47 unidades)"
        />
        
        <AssetPredictionChart
          title="Estado dos Elementos Estruturais"
          data={mockStructuralData}
          parameter={structuralParameter}
          assetName="Elementos Críticos (189 componentes)"
        />
      </div>

      {/* Risk Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Distribuição por Nível de Risco"
          data={mockRiskDistribution}
        />
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Próximas Intervenções Previstas</h3>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Ponte Rio das Pedras</h4>
                  <p className="text-sm text-muted-foreground">km 145 - Reforço estrutural</p>
                </div>
                <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">2024 Q3</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Viaduto Central</h4>
                  <p className="text-sm text-muted-foreground">km 089 - Manutenção preventiva</p>
                </div>
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">2024 Q4</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Passarela Shopping</h4>
                  <p className="text-sm text-muted-foreground">km 203 - Pintura e proteção</p>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">2025 Q1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}