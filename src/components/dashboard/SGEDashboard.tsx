import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

const mockEnvironmentalComplianceData = [
  { period: '2022 Q1', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q2', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q3', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q4', real: 2, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q1', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q2', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q3', real: 3, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q4', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2024 Q1', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q2', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q3', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q4', predicted: 3, status: 'Bom' as const },
];

const mockSustainabilityData = [
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
  { period: '2024 Q3', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q4', predicted: 3, status: 'Bom' as const },
];

const mockLicenseStatus = [
  { name: 'Válidas', value: 85, color: 'hsl(var(--success))' },
  { name: 'Renovação', value: 10, color: 'hsl(var(--warning))' },
  { name: 'Vencidas', value: 5, color: 'hsl(var(--destructive))' },
];

export function SGEDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Licenças Ambientais"
          value="47"
          trend={{ value: 2, isPositive: true }}
          subtitle="Total ativas"
          variant="success"
        />
        <KPICard
          title="Conformidade"
          value="94%"
          trend={{ value: 3, isPositive: true }}
          subtitle="Requisitos atendidos"
        />
        <KPICard
          title="CO2 Reduzido"
          value="1.8k ton"
          trend={{ value: 15, isPositive: true }}
          subtitle="Compensação anual"
        />
        <KPICard
          title="Áreas Preservadas"
          value="245 ha"
          trend={{ value: 8, isPositive: true }}
          subtitle="Conservação"
        />
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetPredictionChart
          title="Conformidade Ambiental"
          data={mockEnvironmentalComplianceData}
          assetName="47 Licenças Ambientais"
        />
        
        <AssetPredictionChart
          title="Metas de Sustentabilidade"
          data={mockSustainabilityData}
          assetName="Indicadores ESG"
        />
      </div>

      {/* License Status and Environmental Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Status das Licenças"
          data={mockLicenseStatus}
        />
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ações Ambientais Prioritárias</h3>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Renovação LI km 145</h4>
                  <p className="text-sm text-muted-foreground">Licença de Instalação</p>
                </div>
                <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">60 dias</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Plantio Compensatório</h4>
                  <p className="text-sm text-muted-foreground">2.500 mudas nativas</p>
                </div>
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Em andamento</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Monitoramento Hídrico</h4>
                  <p className="text-sm text-muted-foreground">Qualidade dos corpos d'água</p>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Mensal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}