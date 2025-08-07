import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PredictionDataPoint {
  period: string;
  real?: number;
  predicted: number;
  status?: 'Bom' | 'Regular' | 'Ruim';
  unit?: string;
}

interface ParameterConfig {
  name: string;
  unit: string;
  range: { min: number; max: number };
  thresholds: { good: number; regular: number };
  format?: (value: number) => string;
}

interface AssetPredictionChartProps {
  title: string;
  data: PredictionDataPoint[];
  assetName: string;
  parameter: ParameterConfig;
  className?: string;
}

// Get status based on parameter value and thresholds
const getStatus = (value: number, parameter: ParameterConfig): string => {
  if (value >= parameter.thresholds.good) return 'Bom';
  if (value >= parameter.thresholds.regular) return 'Regular';
  return 'Ruim';
};

// Custom tooltip to show parameter values
const CustomTooltip = ({ active, payload, label, parameter }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const formatValue = parameter.format || ((v: number) => `${v.toFixed(1)} ${parameter.unit}`);
    
    return (
      <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
        <p className="font-medium">{`Período: ${label}`}</p>
        {data.real !== undefined && (
          <p className="text-chart-1">
            {`Real: ${formatValue(data.real)} (${getStatus(data.real, parameter)})`}
          </p>
        )}
        <p className="text-chart-2">
          {`Predição: ${formatValue(data.predicted)} (${getStatus(data.predicted, parameter)})`}
        </p>
      </div>
    );
  }
  return null;
};

// Custom Y-axis formatter for parameter values
const formatYAxis = (value: number, parameter: ParameterConfig) => {
  if (parameter.format) {
    return parameter.format(value);
  }
  return `${value}${parameter.unit}`;
};

export function AssetPredictionChart({ 
  title, 
  data, 
  assetName,
  parameter,
  className 
}: AssetPredictionChartProps) {
  // Convert data for chart
  const chartData = data.map(item => ({
    ...item,
    realValue: item.real !== undefined ? item.real : null,
    predictedValue: item.predicted
  }));

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">Ativo: {assetName}</p>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="period" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                domain={[parameter.range.min * 0.9, parameter.range.max * 1.1]}
                tickFormatter={(value) => formatYAxis(value, parameter)}
              />
              <Tooltip content={(props) => <CustomTooltip {...props} parameter={parameter} />} />
              <Legend />
              
              {/* Real data line (historical) */}
              <Line 
                type="monotone" 
                dataKey="realValue" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={3}
                name="Real"
                dot={{ fill: 'hsl(var(--chart-1))', strokeWidth: 2, r: 4 }}
                connectNulls={false}
              />
              
              {/* Predicted data line (future) */}
              <Line 
                type="monotone" 
                dataKey="predictedValue" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={3}
                strokeDasharray="8 8"
                name="Predição"
                dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Parameter Info and Thresholds */}
        <div className="mt-4 space-y-2">
          <div className="flex justify-center text-sm text-muted-foreground">
            <span>{parameter.name} ({parameter.unit})</span>
          </div>
          <div className="flex justify-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>≥ {parameter.thresholds.good}{parameter.unit}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-warning rounded-full"></div>
              <span>≥ {parameter.thresholds.regular}{parameter.unit}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span>&lt; {parameter.thresholds.regular}{parameter.unit}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}