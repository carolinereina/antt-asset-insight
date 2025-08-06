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
  title: string;
  value: string | number;
  trend?: { value: number; isPositive: boolean };
  subtitle?: string;
  variant?: 'success' | 'warning' | 'danger' | 'neutral';
  className?: string;
}

export function KPICard({ title, value, trend, subtitle, variant = 'neutral', className }: KPICardProps) {

  const getStatusStyles = () => {
    switch (variant) {
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
    if (!trend) return null;
    
    if (trend.isPositive) {
      return <TrendingUp size={16} className="text-success" />;
    } else {
      return <TrendingDown size={16} className="text-danger" />;
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
            </div>
            {subtitle && (
              <p className="text-xs opacity-75 mt-1">{subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs">
            {getTrendIcon()}
            {trend && (
              <span className={cn(
                "font-medium",
                trend.isPositive ? "text-success" : "text-danger"
              )}>
                {trend.value > 0 ? '+' : ''}{trend.value}%
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}