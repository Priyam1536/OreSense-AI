import React, { useState } from 'react';

interface LCAFormProps {
  onComplete: (data: any) => void;
  onCancel: () => void;
}

const LCAForm: React.FC<LCAFormProps> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Metal Information
    metalType: '',
    miningLocation: '',
    oreGrade: '',
    productionVolume: '',
    functionalUnit: '',
    
    // Step 2: Mining & Ore Extraction
    energyConsumptionMining: '',
    waterConsumptionMining: '',
    emissionsMining: '',
    landUse: '',
    
    // Step 3: Processing & Energy
    transportToProcessing: '',
    energySource: '',
    energyConsumptionProcessing: '',
    processingRoute: '',
    recycledInputRate: '',
    chemicalInputs: '',
    recoveryRate: '',
    
    // Step 4: Transport & Supply Chain
    transportDistances: '',
    transportMode: '',
    packaging: '',
    
    // Step 5: Use Phase
    productLifetime: '',
    
    // Step 6: End-of-Life
    reuseRate: '',
    recyclingRate: '',
    recyclingEfficiency: '',
    disposalRoute: '',
    transportDisposal: '',
    
    // Step 7: Impact Metrics
    globalWarmingPotential: '',
    acidification: '',
    waterConsumption: '',
    energyDemand: '',
    wasteGenerated: '',
    airEmissions: '',
    landUseChange: ''
  });

  const totalSteps = 7;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onComplete(formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black mb-6">Metal Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">Metal Type</label>
              <select
                value={formData.metalType}
                onChange={(e) => handleInputChange('metalType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
              >
                <option value="">Select metal type</option>
                <option value="aluminum">Aluminum</option>
                <option value="copper">Copper</option>
                <option value="iron">Iron</option>
                <option value="steel">Steel</option>
                <option value="zinc">Zinc</option>
                <option value="nickel">Nickel</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Mining Location / Region</label>
              <input
                type="text"
                value={formData.miningLocation}
                onChange={(e) => handleInputChange('miningLocation', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="e.g., Australia, Chile, Canada"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Ore Grade / Concentration (%)</label>
              <input
                type="number"
                step="0.01"
                value={formData.oreGrade}
                onChange={(e) => handleInputChange('oreGrade', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="e.g., 2.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Production Volume / Quantity</label>
              <input
                type="number"
                value={formData.productionVolume}
                onChange={(e) => handleInputChange('productionVolume', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="e.g., 1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Functional Unit</label>
              <select
                value={formData.functionalUnit}
                onChange={(e) => handleInputChange('functionalUnit', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
              >
                <option value="">Select functional unit</option>
                <option value="kg">kg</option>
                <option value="tonne">tonne</option>
                <option value="pound">pound</option>
                <option value="ounce">ounce</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black mb-6">Mining & Ore Extraction</h2>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">Energy Consumption in Mining (diesel, electricity)</label>
              <input
                type="number"
                value={formData.energyConsumptionMining}
                onChange={(e) => handleInputChange('energyConsumptionMining', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Total energy consumption"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Water Consumption in Mining</label>
              <input
                type="number"
                value={formData.waterConsumptionMining}
                onChange={(e) => handleInputChange('waterConsumptionMining', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Total water consumption"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Emissions from Mining (dust, particulates, methane)</label>
              <select
                value={formData.emissionsMining}
                onChange={(e) => handleInputChange('emissionsMining', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
              >
                <option value="">Select emission type</option>
                <option value="dust">Dust</option>
                <option value="particulates">Particulates</option>
                <option value="methane">Methane</option>
                <option value="mixed">Mixed emissions</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Land Use / Land Disturbance</label>
              <input
                type="number"
                step="0.01"
                value={formData.landUse}
                onChange={(e) => handleInputChange('landUse', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Area affected (hectares)"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black mb-6">Processing & Energy</h2>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">Transport from Mine to Processing Facility</label>
              <input
                type="number"
                value={formData.transportToProcessing}
                onChange={(e) => handleInputChange('transportToProcessing', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Distance in kilometers"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Energy Source & Mix (grid, renewables, coal, etc.)</label>
              <select
                value={formData.energySource}
                onChange={(e) => handleInputChange('energySource', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
              >
                <option value="">Select energy source</option>
                <option value="grid">Grid electricity</option>
                <option value="renewables">Renewables</option>
                <option value="coal">Coal</option>
                <option value="natural-gas">Natural gas</option>
                <option value="mixed">Mixed sources</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Energy Consumption in Smelting / Refining</label>
              <input
                type="number"
                value={formData.energyConsumptionProcessing}
                onChange={(e) => handleInputChange('energyConsumptionProcessing', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Energy for processing"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Type of Processing Route (primary vs recycled)</label>
              <select
                value={formData.processingRoute}
                onChange={(e) => handleInputChange('processingRoute', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
              >
                <option value="">Select processing route</option>
                <option value="primary">Primary production</option>
                <option value="recycled">Recycled production</option>
                <option value="mixed">Mixed (primary + recycled)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">% of Recycled Input / Scrap Rate</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                value={formData.recycledInputRate}
                onChange={(e) => handleInputChange('recycledInputRate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="e.g., 25.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Chemical Inputs / Reagents / Fluxes</label>
              <input
                type="text"
                value={formData.chemicalInputs}
                onChange={(e) => handleInputChange('chemicalInputs', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="List main chemicals used"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Losses / Inefficiencies / Yield (recovery rate)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                value={formData.recoveryRate}
                onChange={(e) => handleInputChange('recoveryRate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="e.g., 95.2"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black mb-6">Transport & Supply Chain</h2>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">Transport Distances & Mode (all stages)</label>
              <input
                type="number"
                value={formData.transportDistances}
                onChange={(e) => handleInputChange('transportDistances', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Total transport distance (km)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Transport Mode</label>
              <select
                value={formData.transportMode}
                onChange={(e) => handleInputChange('transportMode', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
              >
                <option value="">Select transport mode</option>
                <option value="truck">Truck</option>
                <option value="rail">Rail</option>
                <option value="ship">Ship</option>
                <option value="air">Air</option>
                <option value="mixed">Mixed modes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Packaging & Shipping (if relevant)</label>
              <input
                type="text"
                value={formData.packaging}
                onChange={(e) => handleInputChange('packaging', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Describe packaging materials and methods"
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black mb-6">Use Phase (if applicable)</h2>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">Expected Product Lifetime</label>
              <input
                type="number"
                value={formData.productLifetime}
                onChange={(e) => handleInputChange('productLifetime', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="e.g., 25 years"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> The use phase considers how long the metal product will remain in service before requiring replacement or reaching end-of-life.
              </p>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black mb-6">End-of-Life / Circularity</h2>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">Reuse / Repurposing Rate</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                value={formData.reuseRate}
                onChange={(e) => handleInputChange('reuseRate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="e.g., 15.0 (%)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Recycling Rate</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                value={formData.recyclingRate}
                onChange={(e) => handleInputChange('recyclingRate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="e.g., 75.0 (%)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Recycling Efficiency</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                value={formData.recyclingEfficiency}
                onChange={(e) => handleInputChange('recyclingEfficiency', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="e.g., 90.0 (%)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Disposal Route / Waste Treatment</label>
              <select
                value={formData.disposalRoute}
                onChange={(e) => handleInputChange('disposalRoute', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
              >
                <option value="">Select disposal method</option>
                <option value="landfill">Landfill</option>
                <option value="incineration">Incineration</option>
                <option value="hazardous-waste">Hazardous waste facility</option>
                <option value="recycling">Recycling facility</option>
                <option value="mixed">Mixed disposal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Transport for Disposal / Recycling</label>
              <input
                type="number"
                value={formData.transportDisposal}
                onChange={(e) => handleInputChange('transportDisposal', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Distance to disposal/recycling facility (km)"
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black mb-6">Impact Metrics</h2>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">Global Warming Potential (CO₂-eq)</label>
              <input
                type="number"
                step="0.01"
                value={formData.globalWarmingPotential}
                onChange={(e) => handleInputChange('globalWarmingPotential', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="e.g., 12.45 kg CO₂-eq"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Acidification, Eutrophication, POCP etc.</label>
              <input
                type="text"
                value={formData.acidification}
                onChange={(e) => handleInputChange('acidification', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Describe impact values"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Water Consumption / Water Footprint</label>
              <input
                type="number"
                value={formData.waterConsumption}
                onChange={(e) => handleInputChange('waterConsumption', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Total water footprint (L)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Energy Demand (primary/non-renewable + renewable)</label>
              <input
                type="number"
                step="0.01"
                value={formData.energyDemand}
                onChange={(e) => handleInputChange('energyDemand', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Energy demand (MJ)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Waste Generated (solid, liquid, chemical)</label>
              <input
                type="number"
                step="0.01"
                value={formData.wasteGenerated}
                onChange={(e) => handleInputChange('wasteGenerated', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Waste generated (kg)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Air / Water Emissions (specific pollutants)</label>
              <input
                type="text"
                value={formData.airEmissions}
                onChange={(e) => handleInputChange('airEmissions', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Specific pollutants"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">Land Use Change / Habitat Loss</label>
              <input
                type="number"
                step="0.01"
                value={formData.landUseChange}
                onChange={(e) => handleInputChange('landUseChange', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black"
                placeholder="Area of habitat affected (hectares)"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-black">Step {currentStep} of {totalSteps}</p>
            <button
              onClick={onCancel}
              className="text-black hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {renderStep()}

        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-black hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            Previous
          </button>

          {currentStep === totalSteps ? (
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200"
            >
              Complete Assessment
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LCAForm;