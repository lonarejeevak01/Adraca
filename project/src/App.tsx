import React from 'react';
import Sidebar from './components/Layout/Sidebar';
import FilterPanel from './components/Dashboard/FilterPanel';
import KPICard from './components/Dashboard/KPICard';
import Charts from './components/Dashboard/Charts';

function App() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Sidebar />
      <FilterPanel />
      
      <main className="ml-16 mr-12 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-900 mb-4">Executive Summary</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <KPICard
              title="Sell Out Volume"
              value="348,940K"
              change="YOY: 67,201K (-12.85%)"
              isPositive={false}
            />
            <KPICard
              title="Sell Out Value"
              value="R$302,631K"
              change="YOY: R$56,410K (-7.70%)"
              isPositive={false}
            />
            <KPICard
              title="Sell Out Units"
              value="297,284K"
              change="YOY: 57,627K (-12.34%)"
              isPositive={false}
            />
            <KPICard
              title="Avg Price Per Unit"
              value="R$1.02"
              change="YOY: R$0.98 (5.30%)"
              isPositive={true}
            />
          </div>
        </div>
        
        <Charts />
      </main>
    </div>
  );
}

export default App;