import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

interface Report {
  id: string;
  name: string;
  metalType: string;
  createdDate: string;
  status: 'completed' | 'draft';
  co2Impact: string;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reports, setReports] = useState<Report[]>([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleNewReport = (formData: any) => {
    // Generate a new report from the form data
    const newReport: Report = {
      id: `report-${Date.now()}`,
      name: `${formData.metalType || 'Metal'} LCA Report`,
      metalType: formData.metalType || 'Unknown',
      createdDate: new Date().toLocaleDateString(),
      status: 'completed',
      co2Impact: formData.globalWarmingPotential ? `${formData.globalWarmingPotential} kg CO₂-eq` : 'TBD'
    };
    
    setReports([...reports, newReport]);
  };

  const handleViewReport = (reportId: string) => {
    console.log('Viewing report:', reportId);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Dashboard 
      reports={reports}
      onNewReport={handleNewReport}
      onViewReport={handleViewReport}
    />
  );
}

export default App;