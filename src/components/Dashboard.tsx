import React, { useState } from 'react';
import { Brain, Plus, FileText, Eye, Calendar, TrendingUp } from 'lucide-react';
import LCAForm from './LCAForm';

interface Report {
  id: string;
  name: string;
  metalType: string;
  createdDate: string;
  status: 'completed' | 'draft';
  co2Impact: string;
}

interface DashboardProps {
  reports: Report[];
  onNewReport: (formData: any) => void;
  onViewReport: (reportId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ reports, onNewReport, onViewReport }) => {
  const [showLCAForm, setShowLCAForm] = useState(false);

  const handleNewReportClick = () => {
    setShowLCAForm(true);
  };

  const handleLCAFormComplete = (formData: any) => {
    onNewReport(formData);
    setShowLCAForm(false);
  };

  const handleLCAFormCancel = () => {
    setShowLCAForm(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (showLCAForm) {
    return (
      <LCAForm 
        onComplete={handleLCAFormComplete}
        onCancel={handleLCAFormCancel}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">OreSense AI</h1>
              <p className="text-sm text-gray-500">LCA Assessment Platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600">Manage your Life Cycle Assessment reports</p>
        </div>

        {/* Reports Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">LCA Reports</h3>
              <p className="text-gray-600 text-sm">
                {reports.length} report{reports.length !== 1 ? 's' : ''} generated
              </p>
            </div>
            <button
              onClick={handleNewReportClick}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>New LCA Assessment</span>
            </button>
          </div>

          {reports.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Reports Made Till Now</h3>
              <p className="text-gray-600 mb-6">
                Start your first LCA assessment to generate comprehensive environmental impact reports.
              </p>
              <button
                onClick={handleNewReportClick}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center space-x-2 mx-auto"
              >
                <Plus className="h-5 w-5" />
                <span>Create First Report</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report) => (
                <div key={report.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{report.name}</h4>
                        <p className="text-sm text-gray-500">{report.metalType}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>CO₂ Impact:</span>
                      </span>
                      <span className="font-medium text-gray-900">{report.co2Impact}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Created:</span>
                      </span>
                      <span className="font-medium text-gray-900">{report.createdDate}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onViewReport(report.id)}
                    className="w-full bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors flex items-center justify-center space-x-1"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Report</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;