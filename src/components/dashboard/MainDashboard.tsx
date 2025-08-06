import { useState } from "react";
import { Sidebar, subSystems } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { ExecutiveSummary } from "./ExecutiveSummary";
import { SGPDashboard } from "./SGPDashboard";
import { SGSDashboard } from "./SGSDashboard";

function SGOAEDashboard() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Sistema de Gestão de OAE</h2>
      <p className="text-muted-foreground">Dashboard em desenvolvimento...</p>
    </div>
  );
}

export function MainDashboard() {
  const [activeSubSystem, setActiveSubSystem] = useState('summary');

  const getSubSystemData = () => {
    const subSystem = subSystems.find(s => s.id === activeSubSystem);
    return {
      title: subSystem?.name || 'Dashboard',
      subtitle: subSystem?.description || 'Visão geral do sistema'
    };
  };

  const renderContent = () => {
    switch (activeSubSystem) {
      case 'summary':
        return <ExecutiveSummary />;
      case 'sgp':
        return <SGPDashboard />;
      case 'sgs':
        return <SGSDashboard />;
      case 'sgoae':
        return <SGOAEDashboard />;
      default:
        return (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {getSubSystemData().title}
            </h2>
            <p className="text-muted-foreground">Dashboard em desenvolvimento...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        activeSubSystem={activeSubSystem}
        onSubSystemChange={setActiveSubSystem}
      />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <DashboardHeader
            title={getSubSystemData().title}
            subtitle={getSubSystemData().subtitle}
            lastUpdate="15 de janeiro de 2024, 14:30"
          />
          
          {renderContent()}
        </div>
      </main>
    </div>
  );
}