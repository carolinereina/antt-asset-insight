import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

const mockSafetyPerformanceData = [
  { period: '2022 Q1', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q2', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q3', real: 1, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q4', real: 1, predicted: 1, status: 'Ruim' as const },
  { period: '2023 Q1', real: 2, predicted: 1, status: 'Ruim' as const },
  { period: '2023 Q2', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q3', real: 3, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q4', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2024 Q1', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q2', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q3', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q4', predicted: 3, status: 'Bom' as const },
];

const mockTrainingEffectivenessData = [
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

const mockIncidentDistribution = [
  { name: 'Sem Lesão', value: 70, color: 'hsl(var(--success))' },
  { name: 'Leve', value: 25, color: 'hsl(var(--warning))' },
  { name: 'Grave', value: 5, color: 'hsl(var(--destructive))' },
];

export function SGSEIDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Taxa de Acidentes"
          value="0.8"
          trend={{ value: -25, isPositive: true }}
          subtitle="Por 100 mil horas"
        />
        <KPICard
          title="Dias sem Acidentes"
          value="127"
          trend={{ value: 15, isPositive: true }}
          subtitle="Recorde atual"
          variant="success"
        />
        <KPICard
          title="Treinamentos"
          value="2.340h"
          trend={{ value: 18, isPositive: true }}
          subtitle="Capacitação realizada"
        />
        <KPICard
          title="Conformidade NRs"
          value="98%"
          trend={{ value: 2, isPositive: true }}
          subtitle="Normas atendidas"
        />
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetPredictionChart
          title="Performance de Segurança"
          data={mockSafetyPerformanceData}
          assetName="Indicadores Consolidados"
        />
        
        <AssetPredictionChart
          title="Efetividade dos Treinamentos"
          data={mockTrainingEffectivenessData}
          assetName="Capacitação da Equipe"
        />
      </div>

      {/* Incident Distribution and Safety Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Distribuição de Incidentes"
          data={mockIncidentDistribution}
        />
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ações de Segurança Programadas</h3>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Treinamento NR-35</h4>
                  <p className="text-sm text-muted-foreground">Trabalho em altura - 45 colaboradores</p>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Próxima sem.</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Auditoria CIPA</h4>
                  <p className="text-sm text-muted-foreground">Comissão Interna de Prevenção</p>
                </div>
                <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">15 dias</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Renovação EPIs</h4>
                  <p className="text-sm text-muted-foreground">Equipamentos de proteção</p>
                </div>
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Concluído</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}