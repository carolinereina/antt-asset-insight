import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

// Conformidade Ambiental (% de requisitos atendidos)
const mockEnvironmentalComplianceData = [
  { period: '2023 Q1', real: 96, predicted: 95 },
  { period: '2023 Q2', real: 94, predicted: 95 },
  { period: '2023 Q3', real: 93, predicted: 94 },
  { period: '2023 Q4', real: 89, predicted: 91 },
  { period: '2024 Q1', real: 87, predicted: 88 },
  { period: '2024 Q2', real: 85, predicted: 86 },
  { period: '2024 Q3', real: 92, predicted: 84 },
  { period: '2024 Q4', real: 95, predicted: 94 },
  { period: '2025 Q1', real: 93, predicted: 92 },
  { period: '2025 Q2', real: 91, predicted: 90 },
  { period: '2025 Q3', real: 89, predicted: 88 },
  { period: '2025 Q4', real: 87, predicted: 86 },
  { period: '2026 Q1', predicted: 84 },
  { period: '2026 Q2', predicted: 82 },
  { period: '2026 Q3', predicted: 79 },
  { period: '2026 Q4', predicted: 77 },
  { period: '2027 Q1', predicted: 74 },
  { period: '2027 Q2', predicted: 72 },
  { period: '2027 Q3', predicted: 69 },
  { period: '2027 Q4', predicted: 67 },
];

// Metas de Sustentabilidade (% de atingimento)
const mockSustainabilityData = [
  { period: '2023 Q1', real: 78, predicted: 75 },
  { period: '2023 Q2', real: 82, predicted: 80 },
  { period: '2023 Q3', real: 85, predicted: 83 },
  { period: '2023 Q4', real: 88, predicted: 86 },
  { period: '2024 Q1', real: 91, predicted: 89 },
  { period: '2024 Q2', real: 93, predicted: 92 },
  { period: '2024 Q3', real: 95, predicted: 94 },
  { period: '2024 Q4', real: 97, predicted: 96 },
  { period: '2025 Q1', real: 94, predicted: 95 },
  { period: '2025 Q2', real: 91, predicted: 92 },
  { period: '2025 Q3', real: 88, predicted: 89 },
  { period: '2025 Q4', real: 85, predicted: 86 },
  { period: '2026 Q1', predicted: 83 },
  { period: '2026 Q2', predicted: 80 },
  { period: '2026 Q3', predicted: 77 },
  { period: '2026 Q4', predicted: 74 },
  { period: '2027 Q1', predicted: 71 },
  { period: '2027 Q2', predicted: 68 },
  { period: '2027 Q3', predicted: 65 },
  { period: '2027 Q4', predicted: 62 },
];

const environmentalComplianceParameter = {
  name: 'Conformidade Ambiental',
  unit: '%',
  range: { min: 0, max: 100 },
  thresholds: { good: 90, regular: 80 }
};

const sustainabilityParameter = {
  name: 'Metas de Sustentabilidade',
  unit: '%',
  range: { min: 0, max: 100 },
  thresholds: { good: 85, regular: 70 }
};

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
          parameter={environmentalComplianceParameter}
          assetName="47 Licenças Ambientais"
        />
        
        <AssetPredictionChart
          title="Metas de Sustentabilidade"
          data={mockSustainabilityData}
          parameter={sustainabilityParameter}
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