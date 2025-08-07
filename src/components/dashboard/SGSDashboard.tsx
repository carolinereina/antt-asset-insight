import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

// Retrorefletividade da Sinalização Horizontal (mcd/lx/m²)
const mockRetroreflectivityData = [
  { period: '2022 Q1', real: 180, predicted: 175 },
  { period: '2022 Q2', real: 165, predicted: 170 },
  { period: '2022 Q3', real: 140, predicted: 155 },
  { period: '2022 Q4', real: 125, predicted: 130 },
  { period: '2023 Q1', real: 110, predicted: 115 },
  { period: '2023 Q2', real: 98, predicted: 105 },
  { period: '2023 Q3', real: 115, predicted: 90 },
  { period: '2023 Q4', real: 135, predicted: 140 },
  { period: '2024 Q1', predicted: 125 },
  { period: '2024 Q2', predicted: 110 },
  { period: '2024 Q3', predicted: 95 },
  { period: '2024 Q4', predicted: 80 },
];

// Estado de Conservação das Placas (% adequadas)
const mockSignConditionData = [
  { period: '2022 Q1', real: 95, predicted: 94 },
  { period: '2022 Q2', real: 92, predicted: 93 },
  { period: '2022 Q3', real: 88, predicted: 90 },
  { period: '2022 Q4', real: 85, predicted: 86 },
  { period: '2023 Q1', real: 82, predicted: 83 },
  { period: '2023 Q2', real: 79, predicted: 80 },
  { period: '2023 Q3', real: 83, predicted: 77 },
  { period: '2023 Q4', real: 87, predicted: 85 },
  { period: '2024 Q1', predicted: 82 },
  { period: '2024 Q2', predicted: 78 },
  { period: '2024 Q3', predicted: 75 },
  { period: '2024 Q4', predicted: 72 },
];

const retroreflectivityParameter = {
  name: 'Retrorefletividade',
  unit: ' mcd/lx/m²',
  range: { min: 0, max: 200 },
  thresholds: { good: 120, regular: 80 }
};

const signConditionParameter = {
  name: 'Estado de Conservação das Placas',
  unit: '%',
  range: { min: 0, max: 100 },
  thresholds: { good: 85, regular: 70 }
};

const mockSignalingDistribution = [
  { name: 'Adequada', value: 68, color: 'hsl(var(--success))' },
  { name: 'Atenção', value: 22, color: 'hsl(var(--warning))' },
  { name: 'Crítica', value: 10, color: 'hsl(var(--destructive))' },
];

export function SGSDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Retrorefletividade"
          value="125 mcd/lx/m²"
          trend={{ value: -8, isPositive: false }}
          subtitle="Meta: ≥ 120"
        />
        <KPICard
          title="Placas Adequadas"
          value="82%"
          trend={{ value: -5, isPositive: false }}
          subtitle="Meta: ≥ 85%"
          variant="warning"
        />
        <KPICard
          title="Defensas Íntegras"
          value="96%"
          trend={{ value: 2, isPositive: true }}
          subtitle="124 km de 129 km"
          variant="success"
        />
        <KPICard
          title="Redução Acidentes"
          value="18%"
          trend={{ value: 25, isPositive: true }}
          subtitle="Comparado a 2023"
          variant="success"
        />
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetPredictionChart
          title="Retrorefletividade Sinalização Horizontal"
          data={mockRetroreflectivityData}
          parameter={retroreflectivityParameter}
          assetName="Sinalização Horizontal (89 km)"
        />
        
        <AssetPredictionChart
          title="Estado de Conservação das Placas"
          data={mockSignConditionData}
          parameter={signConditionParameter}
          assetName="347 Placas de Sinalização"
        />
      </div>

      {/* Signaling Distribution and Priority Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Estado da Sinalização"
          data={mockSignalingDistribution}
        />
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ações Prioritárias</h3>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Repintura km 45-78</h4>
                  <p className="text-sm text-muted-foreground">Sinalização horizontal - 33 km</p>
                </div>
                <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">15 dias</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Substituição Placas km 156</h4>
                  <p className="text-sm text-muted-foreground">8 placas com baixa legibilidade</p>
                </div>
                <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">Urgente</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Manutenção Defensas km 203</h4>
                  <p className="text-sm text-muted-foreground">Reparo de 500m de defensas</p>
                </div>
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Programado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}