import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

const mockFacilityConditionData = [
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
  { period: '2024 Q3', predicted: 2, status: 'Regular' as const },
  { period: '2024 Q4', predicted: 2, status: 'Regular' as const },
];

const mockEquipmentUptimeData = [
  { period: '2022 Q1', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q2', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2022 Q3', real: 3, predicted: 2, status: 'Regular' as const },
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

const mockAssetDistribution = [
  { name: 'Operacional', value: 78, color: 'hsl(var(--success))' },
  { name: 'Manutenção', value: 15, color: 'hsl(var(--warning))' },
  { name: 'Fora de Operação', value: 7, color: 'hsl(var(--destructive))' },
];

export function SGITSDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Instalações Ativas"
          value="28"
          trend={{ value: 1, isPositive: true }}
          subtitle="Edifícios e praças"
        />
        <KPICard
          title="Equipamentos"
          value="1.247"
          trend={{ value: 23, isPositive: true }}
          subtitle="Dispositivos monitorados"
        />
        <KPICard
          title="Uptime Médio"
          value="97.8%"
          trend={{ value: 1.2, isPositive: true }}
          subtitle="Disponibilidade"
          variant="success"
        />
        <KPICard
          title="Economia Manutenção"
          value="R$ 680K"
          trend={{ value: 12, isPositive: true }}
          subtitle="Preditiva vs. corretiva"
        />
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetPredictionChart
          title="Estado das Instalações"
          data={mockFacilityConditionData}
          assetName="28 Instalações Prediais"
        />
        
        <AssetPredictionChart
          title="Disponibilidade dos Equipamentos"
          data={mockEquipmentUptimeData}
          assetName="1.247 Equipamentos ITS"
        />
      </div>

      {/* Asset Distribution and Maintenance Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Status dos Ativos"
          data={mockAssetDistribution}
        />
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Manutenções Programadas</h3>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Câmeras km 45-67</h4>
                  <p className="text-sm text-muted-foreground">Limpeza e calibração - 24 unidades</p>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Próxima sem.</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Radar km 156</h4>
                  <p className="text-sm text-muted-foreground">Substituição preventiva</p>
                </div>
                <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">15 dias</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Praça Pedágio Norte</h4>
                  <p className="text-sm text-muted-foreground">Manutenção predial geral</p>
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