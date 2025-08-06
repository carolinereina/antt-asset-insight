import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PredictionDataPoint {
  period: string;
  real?: number;
  predicted: number;
  status: 'Bom' | 'Regular' | 'Ruim';
}

interface AssetPredictionChartProps {
  title: string;
  data: PredictionDataPoint[];
  assetName: string;
  className?: string;
}

// Convert status to numeric values for charting
const statusToValue = (status: 'Bom' | 'Regular' | 'Ruim'): number => {
  switch (status) {
    case 'Bom': return 3;
    case 'Regular': return 2;
    case 'Ruim': return 1;
    default: return 2;
  }
};

// Custom tooltip to show status text
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
        <p className="font-medium">{`Período: ${label}`}</p>
        {data.real !== undefined && (
          <p className="text-chart-1">
            {`Real: ${data.real === 3 ? 'Bom' : data.real === 2 ? 'Regular' : 'Ruim'}`}
          </p>
        )}
        <p className="text-chart-2">
          {`Predição: ${data.status}`}
        </p>
      </div>
    );
  }
  return null;
};

// Custom Y-axis formatter
const formatYAxis = (value: number) => {
  switch (value) {
    case 3: return 'Bom';
    case 2: return 'Regular';
    case 1: return 'Ruim';
    default: return '';
  }
};

export function AssetPredictionChart({ 
  title, 
  data, 
  assetName,
  className 
}: AssetPredictionChartProps) {
  // Convert data for chart
  const chartData = data.map(item => ({
    ...item,
    realValue: item.real !== undefined ? item.real : null,
    predictedValue: statusToValue(item.status)
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
                domain={[0.5, 3.5]}
                ticks={[1, 2, 3]}
                tickFormatter={formatYAxis}
              />
              <Tooltip content={<CustomTooltip />} />
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
        
        {/* Status Legend */}
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span>Bom</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span>Regular</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-destructive rounded-full"></div>
            <span>Ruim</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}