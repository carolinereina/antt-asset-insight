import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

// Margem EBITDA (%)
const mockEBITDAData = [
  { period: '2022 Q1', real: 22.5, predicted: 22.0 },
  { period: '2022 Q2', real: 23.1, predicted: 23.0 },
  { period: '2022 Q3', real: 21.8, predicted: 22.5 },
  { period: '2022 Q4', real: 20.2, predicted: 21.0 },
  { period: '2023 Q1', real: 18.9, predicted: 19.5 },
  { period: '2023 Q2', real: 17.3, predicted: 18.0 },
  { period: '2023 Q3', real: 19.8, predicted: 17.0 },
  { period: '2023 Q4', real: 21.5, predicted: 20.5 },
  { period: '2024 Q1', predicted: 22.0 },
  { period: '2024 Q2', predicted: 23.4 },
  { period: '2024 Q3', predicted: 24.1 },
  { period: '2024 Q4', predicted: 24.8 },
];

// ROI Investimentos (%)
const mockROIData = [
  { period: '2022 Q1', real: 15.2, predicted: 15.0 },
  { period: '2022 Q2', real: 16.1, predicted: 16.0 },
  { period: '2022 Q3', real: 16.8, predicted: 16.5 },
  { period: '2022 Q4', real: 14.9, predicted: 15.5 },
  { period: '2023 Q1', real: 13.2, predicted: 14.0 },
  { period: '2023 Q2', real: 12.1, predicted: 13.0 },
  { period: '2023 Q3', real: 14.8, predicted: 12.5 },
  { period: '2023 Q4', real: 16.5, predicted: 15.8 },
  { period: '2024 Q1', predicted: 17.2 },
  { period: '2024 Q2', predicted: 18.2 },
  { period: '2024 Q3', predicted: 18.8 },
  { period: '2024 Q4', predicted: 19.5 },
];

const ebitdaParameter = {
  name: 'Margem EBITDA',
  unit: '%',
  range: { min: 0, max: 30 },
  thresholds: { good: 20, regular: 15 }
};

const roiParameter = {
  name: 'ROI - Retorno sobre Investimento',
  unit: '%',
  range: { min: 0, max: 25 },
  thresholds: { good: 15, regular: 10 }
};

const mockExpenseDistribution = [
  { name: 'Manutenção', value: 45, color: 'hsl(var(--chart-1))' },
  { name: 'Operação', value: 30, color: 'hsl(var(--chart-2))' },
  { name: 'Investimentos', value: 15, color: 'hsl(var(--chart-3))' },
  { name: 'Administrativo', value: 10, color: 'hsl(var(--chart-4))' },
];

export function SGFDashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Receita Trimestral"
          value="R$ 84.7M"
          trend={{ value: 8, isPositive: true }}
          subtitle="Arrecadação de pedágio"
          variant="success"
        />
        <KPICard
          title="Margem EBITDA"
          value="23.4%"
          trend={{ value: 2.1, isPositive: true }}
          subtitle="Rentabilidade operacional"
        />
        <KPICard
          title="Custos Manutenção"
          value="R$ 12.3M"
          trend={{ value: -5, isPositive: true }}
          subtitle="Otimização alcançada"
        />
        <KPICard
          title="ROI Investimentos"
          value="18.2%"
          trend={{ value: 3.5, isPositive: true }}
          subtitle="Retorno sobre capital"
        />
      </div>

      {/* Prediction Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetPredictionChart
          title="Evolução da Margem EBITDA"
          data={mockEBITDAData}
          parameter={ebitdaParameter}
          assetName="Indicadores Consolidados"
        />
        
        <AssetPredictionChart
          title="ROI dos Investimentos"
          data={mockROIData}
          parameter={roiParameter}
          assetName="Retorno sobre Capital Investido"
        />
      </div>

      {/* Expense Distribution and Financial Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatusDistributionChart
          title="Distribuição de Despesas"
          data={mockExpenseDistribution}
        />
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Alertas Financeiros</h3>
          <div className="space-y-3">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Revisão Tarifária</h4>
                  <p className="text-sm text-muted-foreground">Processo de reajuste em andamento</p>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Jun 2024</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Investimento OAEs</h4>
                  <p className="text-sm text-muted-foreground">R$ 15M aprovados para 2024</p>
                </div>
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Aprovado</span>
              </div>
            </div>
            
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Auditoria ANTT</h4>
                  <p className="text-sm text-muted-foreground">Conformidade financeira validada</p>
                </div>
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Conforme</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}