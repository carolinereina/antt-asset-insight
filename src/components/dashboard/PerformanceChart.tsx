import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

interface ChartDataPoint {
  month: string;
  real: number;
  predicted: number;
  target?: number;
}

interface PerformanceChartProps {
  title: string;
  data: ChartDataPoint[];
  yAxisLabel: string;
  showTarget?: boolean;
  className?: string;
}

export function PerformanceChart({ 
  title, 
  data, 
  yAxisLabel, 
  showTarget = false,
  className 
}: PerformanceChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }}
              />
              <Legend />
              
              <Line 
                type="monotone" 
                dataKey="real" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={2}
                name="Real"
                dot={{ fill: 'hsl(var(--chart-1))', strokeWidth: 2 }}
              />
              
              <Line 
                type="monotone" 
                dataKey="predicted" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Previsto"
                dot={{ fill: 'hsl(var(--chart-2))', strokeWidth: 2 }}
              />

              {showTarget && (
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="hsl(var(--chart-3))" 
                  strokeWidth={1}
                  strokeDasharray="2 2"
                  name="Meta"
                  dot={false}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}