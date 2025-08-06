import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

const mockResponseTimeData = [
  { period: '2022 Q1', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q2', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q3', real: 3, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q4', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q1', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q2', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q3', real: 2, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q4', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2024 Q1', predicted: 2, status: 'Regular' as const },
  { period: '2024 Q2', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q3', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q4', predicted: 3, status: 'Bom' as const },
];

const mockServiceQualityData = [
  { period: '2022 Q1', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q2', real: 3, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q3', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q4', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q1', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q2', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q3', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q4', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2024 Q1', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q2', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q3', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q4', predicted: 3, status: 'Bom' as const },
];

const mockIncidentDistribution = [
  { name: 'Acidentes', value: 35, color: 'hsl(var(--destructive))' },
  { name: 'Panes', value: 28, color: 'hsl(var(--warning))' },
  { name: 'Emergências', value: 22, color: 'hsl(var(--chart-3))' },
  { name: 'Outros', value: 15, color: 'hsl(var(--chart-4))' },
];

export function SGOSTDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Ocorrências/Mês"
          value="124"
          trend={{ value: -8, isPositive: true }}
          subtitle="Média mensal"
        />
        <KPICard
          title="Tempo Resposta"
          value="9.2min"
          trend={{ value: -15, isPositive: true }}
          subtitle="Média de atendimento"
          variant="success"
        />
        <KPICard
          title="Satisfação Usuário"
          value="4.7/5"
          trend={{ value: 0.3, isPositive: true }}
          subtitle="Avaliação dos serviços"
        />
        <KPICard
          title="Disponibilidade"
          value="99.2%"
          trend={{ value: 0.5, isPositive: true }}
          subtitle="Cobertura de atendimento"
        />
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetPredictionChart
          title="Tempo de Resposta"
          data={mockResponseTimeData}
          assetName="Atendimento a Ocorrências"
        />
        
        <AssetPredictionChart
          title="Qualidade dos Serviços"
          data={mockServiceQualityData}
          assetName="Avaliação Terceirizados"
        />
      </div>

      {/* Incident Distribution and Recent Incidents */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Tipos de Ocorrências"
          data={mockIncidentDistribution}
        />
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ocorrências Recentes</h3>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Acidente km 87</h4>
                  <p className="text-sm text-muted-foreground">Colisão traseira - Atendido em 6min</p>
                </div>
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Resolvido</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Pane km 156</h4>
                  <p className="text-sm text-muted-foreground">Veículo parado - Guincho a caminho</p>
                </div>
                <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">Em andamento</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Carga perdida km 203</h4>
                  <p className="text-sm text-muted-foreground">Limpeza de pista necessária</p>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Programado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}