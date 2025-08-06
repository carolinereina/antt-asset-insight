import { Card, CardContent } from "@/components/ui/card";
import { Calendar, RefreshCw, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  lastUpdate?: string;
}

export function DashboardHeader({ title, subtitle, lastUpdate }: DashboardHeaderProps) {
  return (
    <Card className="mb-6 bg-gradient-subtle border-0 shadow-soft">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            {subtitle && (
              <p className="text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {lastUpdate && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />
                <span>Última atualização: {lastUpdate}</span>
              </div>
            )}
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter size={16} className="mr-2" />
                Filtros
              </Button>
              
              <Button variant="outline" size="sm">
                <RefreshCw size={16} className="mr-2" />
                Atualizar
              </Button>
              
              <Button variant="outline" size="sm">
                <Download size={16} className="mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}