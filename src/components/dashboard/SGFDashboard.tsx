import { KPICard } from "./KPICard";
import { AssetPredictionChart } from "./AssetPredictionChart";
import { StatusDistributionChart } from "./StatusDistributionChart";

const mockFinancialHealthData = [
  { period: '2022 Q1', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q2', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q3', real: 2, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q4', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q1', real: 1, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q2', real: 1, predicted: 1, status: 'Ruim' as const },
  { period: '2023 Q3', real: 2, predicted: 1, status: 'Ruim' as const },
  { period: '2023 Q4', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2024 Q1', predicted: 2, status: 'Regular' as const },
  { period: '2024 Q2', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q3', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q4', predicted: 3, status: 'Bom' as const },
];

const mockBudgetPerformanceData = [
  { period: '2022 Q1', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q2', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q3', real: 3, predicted: 3, status: 'Bom' as const },
  { period: '2022 Q4', real: 2, predicted: 3, status: 'Bom' as const },
  { period: '2023 Q1', real: 2, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q2', real: 1, predicted: 2, status: 'Regular' as const },
  { period: '2023 Q3', real: 1, predicted: 1, status: 'Ruim' as const },
  { period: '2023 Q4', real: 2, predicted: 1, status: 'Ruim' as const },
  { period: '2024 Q1', predicted: 2, status: 'Regular' as const },
  { period: '2024 Q2', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q3', predicted: 3, status: 'Bom' as const },
  { period: '2024 Q4', predicted: 3, status: 'Bom' as const },
];

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
          title="Saúde Financeira Geral"
          data={mockFinancialHealthData}
          assetName="Indicadores Consolidados"
        />
        
        <AssetPredictionChart
          title="Performance Orçamentária"
          data={mockBudgetPerformanceData}
          assetName="Cumprimento de Metas"
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