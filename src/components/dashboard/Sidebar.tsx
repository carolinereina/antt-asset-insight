import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Construction, 
  Signpost, 
  Layers, 
  Waves, 
  Users, 
  DollarSign, 
  Leaf, 
  Shield, 
  AlertTriangle, 
  Building,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export interface SubSystem {
  id: string;
  name: string;
  shortName: string;
  icon: React.ComponentType<any>;
  description: string;
}

const subSystems: SubSystem[] = [
  {
    id: 'summary',
    name: 'Sumário Executivo',
    shortName: 'Sumário',
    icon: Home,
    description: 'Visão geral consolidada'
  },
  {
    id: 'sgp',
    name: 'Sistema de Gestão de Pavimento',
    shortName: 'SGP',
    icon: Construction,
    description: 'Gestão de pavimento'
  },
  {
    id: 'sgs',
    name: 'Sistema de Gestão de Sinalização',
    shortName: 'SGS',
    icon: Signpost,
    description: 'Gestão de sinalização'
  },
  {
    id: 'sgoae',
    name: 'Sistema de Gestão de OAE',
    shortName: 'SGOAE',
    icon: Layers,
    description: 'Obras de Arte Especiais'
  },
  {
    id: 'sgoac',
    name: 'Sistema de Gestão de OAC',
    shortName: 'SGOAC',
    icon: Waves,
    description: 'Obras de Arte Correntes'
  },
  {
    id: 'sgtec',
    name: 'Sistema de Gestão de Terceiros',
    shortName: 'SGTEC',
    icon: Users,
    description: 'Gestão de terceiros'
  },
  {
    id: 'sgf',
    name: 'Sistema de Gestão Financeira',
    shortName: 'SGF',
    icon: DollarSign,
    description: 'Gestão financeira'
  },
  {
    id: 'sge',
    name: 'Sistema de Gestão Ambiental',
    shortName: 'SGE',
    icon: Leaf,
    description: 'Gestão ambiental'
  },
  {
    id: 'sgsei',
    name: 'Sistema de Segurança e Saúde',
    shortName: 'SGSEI',
    icon: Shield,
    description: 'Segurança ocupacional'
  },
  {
    id: 'sgost',
    name: 'Sistema de Ocorrências',
    shortName: 'SGOST',
    icon: AlertTriangle,
    description: 'Gestão de ocorrências'
  },
  {
    id: 'sgits',
    name: 'Sistema de Instalações',
    shortName: 'SGITS',
    icon: Building,
    description: 'Instalações e equipamentos'
  }
];

interface SidebarProps {
  activeSubSystem: string;
  onSubSystemChange: (subSystemId: string) => void;
}

export function Sidebar({ activeSubSystem, onSubSystemChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">ANTT</h1>
              <p className="text-sm text-sidebar-foreground/70">Dashboard de Ativos</p>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded hover:bg-sidebar-accent text-sidebar-foreground"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {subSystems.map((subSystem) => {
            const Icon = subSystem.icon;
            const isActive = activeSubSystem === subSystem.id;
            
            return (
              <button
                key={subSystem.id}
                onClick={() => onSubSystemChange(subSystem.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors",
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-soft" 
                    : "text-sidebar-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                )}
                title={isCollapsed ? subSystem.name : undefined}
              >
                <Icon size={16} className="flex-shrink-0" />
                {!isCollapsed && (
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-sm truncate">
                      {subSystem.shortName}
                    </div>
                    <div className="text-xs opacity-70 truncate">
                      {subSystem.description}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        {!isCollapsed && (
          <div className="text-xs text-sidebar-foreground/50 text-center">
            v2.1.0 - 2024
          </div>
        )}
      </div>
    </div>
  );
}

export { subSystems };