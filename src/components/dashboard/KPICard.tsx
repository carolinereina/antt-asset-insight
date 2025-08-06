import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface KPIData {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
  status?: 'success' | 'warning' | 'danger' | 'neutral';
  unit?: string;
  subtitle?: string;
}

interface KPICardProps {
  data: KPIData;
  className?: string;
}

export function KPICard({ data, className }: KPICardProps) {
  const { title, value, change, trend, status = 'neutral', unit, subtitle } = data;

  const getStatusStyles = () => {
    switch (status) {
      case 'success':
        return 'border-success/20 bg-gradient-success text-success-foreground';
      case 'warning':
        return 'border-warning/20 bg-gradient-warning text-warning-foreground';
      case 'danger':
        return 'border-danger/20 bg-gradient-danger text-danger-foreground';
      default:
        return 'border-border bg-card text-card-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-success" />;
      case 'down':
        return <TrendingDown size={16} className="text-danger" />;
      case 'stable':
        return <Minus size={16} className="text-muted-foreground" />;
      default:
        return null;
    }
  };

  return (
    <Card className={cn(
      "transition-all duration-200 hover:shadow-medium",
      getStatusStyles(),
      className
    )}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium opacity-90">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold">
              {value}
              {unit && <span className="text-lg font-normal ml-1">{unit}</span>}
            </div>
            {subtitle && (
              <p className="text-xs opacity-75 mt-1">{subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs">
            {getTrendIcon()}
            {change !== undefined && (
              <span className={cn(
                "font-medium",
                trend === 'up' ? "text-success" : 
                trend === 'down' ? "text-danger" : 
                "text-muted-foreground"
              )}>
                {change > 0 ? '+' : ''}{change}%
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}