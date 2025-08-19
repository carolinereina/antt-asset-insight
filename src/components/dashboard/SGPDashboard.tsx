import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// IRI Data (International Roughness Index)
const mockIRIData = [
  { period: '2023 Q1', real: 1.8, predicted: 1.8 },
  { period: '2023 Q2', real: 2.1, predicted: 2.0 },
  { period: '2023 Q3', real: 2.4, predicted: 2.3 },
  { period: '2023 Q4', real: 2.8, predicted: 2.6 },
  { period: '2024 Q1', real: 3.2, predicted: 3.0 },
  { period: '2024 Q2', real: 3.5, predicted: 3.4 },
  { period: '2024 Q3', real: 3.1, predicted: 3.8 },
  { period: '2024 Q4', real: 2.9, predicted: 2.8 },
  { period: '2025 Q1', real: 3.2, predicted: 3.1 },
  { period: '2025 Q2', real: 3.6, predicted: 3.5 },
  { period: '2025 Q3', real: 4.1, predicted: 4.0 },
  { period: '2025 Q4', real: 4.5, predicted: 4.4 },
  { period: '2026 Q1', predicted: 4.8 },
  { period: '2026 Q2', predicted: 5.2 },
  { period: '2026 Q3', predicted: 5.6 },
  { period: '2026 Q4', predicted: 6.0 },
  { period: '2027 Q1', predicted: 6.4 },
  { period: '2027 Q2', predicted: 6.8 },
  { period: '2027 Q3', predicted: 7.2 },
  { period: '2027 Q4', predicted: 7.6 },
];

// IGG Data (Geometric Condition Index)
const mockIGGData = [
  { period: '2023 Q1', real: 4.2, predicted: 4.1 },
  { period: '2023 Q2', real: 4.0, predicted: 4.0 },
  { period: '2023 Q3', real: 3.8, predicted: 3.8 },
  { period: '2023 Q4', real: 3.5, predicted: 3.6 },
  { period: '2024 Q1', real: 3.3, predicted: 3.4 },
  { period: '2024 Q2', real: 3.1, predicted: 3.2 },
  { period: '2024 Q3', real: 3.4, predicted: 3.0 },
  { period: '2024 Q4', real: 3.6, predicted: 3.7 },
  { period: '2025 Q1', real: 3.4, predicted: 3.5 },
  { period: '2025 Q2', real: 3.1, predicted: 3.2 },
  { period: '2025 Q3', real: 2.8, predicted: 2.9 },
  { period: '2025 Q4', real: 2.5, predicted: 2.6 },
  { period: '2026 Q1', predicted: 2.3 },
  { period: '2026 Q2', predicted: 2.0 },
  { period: '2026 Q3', predicted: 1.8 },
  { period: '2026 Q4', predicted: 1.5 },
  { period: '2027 Q1', predicted: 1.3 },
  { period: '2027 Q2', predicted: 1.0 },
  { period: '2027 Q3', predicted: 0.8 },
  { period: '2027 Q4', predicted: 0.5 },
];

const iriParameter = {
  name: 'IRI - Índice de Irregularidade Internacional',
  unit: ' m/km',
  range: { min: 0, max: 6 },
  thresholds: { good: 2.7, regular: 3.5 }
};

const iggParameter = {
  name: 'IGG - Índice de Condição Geométrica',
  unit: '',
  range: { min: 0, max: 5 },
  thresholds: { good: 3.5, regular: 2.5 }
};

const classDistributionData = [
  { name: "Classe A (IGG ≥ 4.0)", value: 78, color: "#10B981" },
  { name: "Classe B (3.0 ≤ IGG < 4.0)", value: 134, color: "#F59E0B" },
  { name: "Classe C (2.0 ≤ IGG < 3.0)", value: 89, color: "#EF4444" },
  { name: "Classe D (IGG < 2.0)", value: 27, color: "#8B5CF6" }
];

export function SGPDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="IGG Médio"
          value="3.2"
          trend={{ value: -2.3, isPositive: false }}
          subtitle="Meta: ≥ 3.5"
          variant="success"
        />
        <KPICard
          title="IRI Médio"
          value="2.8 m/km"
          trend={{ value: 8.5, isPositive: false }}
          subtitle="Meta: ≤ 2.5"
        />
        <KPICard
          title="Trechos Classe A"
          value="24%"
          trend={{ value: -12, isPositive: false }}
          subtitle="78 km de 328 km"
          variant="warning"
        />
        <KPICard
          title="Economia Manutenção"
          value="15%"
          trend={{ value: 23, isPositive: true }}
          subtitle="R$ 1.2M poupados"
          variant="success"
        />
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetPredictionChart
          title="Evolução do IRI"
          data={mockIRIData}
          parameter={iriParameter}
          assetName="Trechos Monitorados (145 km)"
        />
        
        <AssetPredictionChart
          title="Evolução do IGG"
          data={mockIGGData}
          parameter={iggParameter}
          assetName="Malha Rodoviária Principal"
        />
      </div>

      {/* Distribution and Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Distribuição por Classe de Desempenho"
          data={classDistributionData}
        />
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Mapa de Calor - Estado do Pavimento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Simulated heat map data */}
              <div className="grid grid-cols-10 gap-1">
                {Array.from({ length: 50 }, (_, i) => {
                  const intensity = Math.random();
                  let bgColor = 'bg-success';
                  if (intensity > 0.7) {
                    bgColor = 'bg-destructive';
                  } else if (intensity > 0.4) {
                    bgColor = 'bg-warning';
                  }
                  
                  return (
                    <div 
                      key={i}
                      className={`h-6 rounded ${bgColor} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                      title={`KM ${i * 6.5 + 10} - IGG: ${(5 - intensity * 3).toFixed(1)}`}
                    />
                  );
                })}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">KM 10</span>
                <span className="text-muted-foreground">KM 328</span>
              </div>
              
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-success rounded"></div>
                  <span>IGG ≥ 3.5</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-warning rounded"></div>
                  <span>IGG 2.5-3.5</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-destructive rounded"></div>
                  <span>IGG &lt; 2.5</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Maintenance Optimization */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Otimização de Manutenção</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">R$ 8.5M</div>
              <div className="text-sm text-muted-foreground">Custos Evitados</div>
              <div className="text-xs text-muted-foreground">Manutenção preventiva</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-success">+2.3 anos</div>
              <div className="text-sm text-muted-foreground">Vida Útil Estendida</div>
              <div className="text-xs text-muted-foreground">Média da malha</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-warning">89%</div>
              <div className="text-sm text-muted-foreground">Aderência do Modelo</div>
              <div className="text-xs text-muted-foreground">Acurácia preditiva</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}