import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

const mockContractPerformanceData = [
  { period: '2022 Q1', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q2', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q3', real: 2, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q4', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q1', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q2', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q3', real: 3, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q4', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2024 Q1', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q2', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q3', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q4', predicted: 3, status: 'Bom' as const },
];

const mockServiceQualityData = [
  { period: '2022 Q1', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q2', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q3', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q4', real: 3, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q1', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q2', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q3', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q4', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2024 Q1', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q2', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q3', predicted: 2, status: 'Regular' as const },
  { period: '2024 Q4', predicted: 2, status: 'Regular' as const },
];

const mockContractStatus = [
  { name: 'Conformes', value: 78, color: 'hsl(var(--success))' },
  { name: 'Atenção', value: 18, color: 'hsl(var(--warning))' },
  { name: 'Críticos', value: 4, color: 'hsl(var(--destructive))' },
];

export function SGTECDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Contratos Ativos"
          value="23"
          trend={{ value: 1, isPositive: true }}
          subtitle="Terceiros contratados"
        />
        <KPICard
          title="SLA Médio"
          value="96%"
          trend={{ value: 4, isPositive: true }}
          subtitle="Cumprimento de acordos"
          variant="success"
        />
        <KPICard
          title="Tempo Resposta"
          value="8.5min"
          trend={{ value: -12, isPositive: true }}
          subtitle="Emergências atendidas"
        />
        <KPICard
          title="Economia Contratos"
          value="R$ 1.2M"
          trend={{ value: 8, isPositive: true }}
          subtitle="Otimização de custos"
        />
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetPredictionChart
          title="Performance Geral dos Contratos"
          data={mockContractPerformanceData}
          assetName="23 Contratos Ativos"
        />
        
        <AssetPredictionChart
          title="Qualidade dos Serviços"
          data={mockServiceQualityData}
          assetName="Avaliação de Satisfação"
        />
      </div>

      {/* Contract Status and Service List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Status dos Contratos"
          data={mockContractStatus}
        />
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Principais Serviços Terceirizados</h3>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Guincho e Reboque</h4>
                  <p className="text-sm text-muted-foreground">SLA: 15min • Cobertura 24h</p>
                </div>
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">98% SLA</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Ambulância</h4>
                  <p className="text-sm text-muted-foreground">SLA: 12min • UTI móvel</p>
                </div>
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">95% SLA</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Conservação Viária</h4>
                  <p className="text-sm text-muted-foreground">Manutenção preventiva</p>
                </div>
                <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">87% SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}