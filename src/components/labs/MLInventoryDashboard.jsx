import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Package, AlertCircle, DollarSign } from 'lucide-react';

const generateMLPredictionData = () => {
  const models = ['350Z', '370Z', 'GTR R32', 'GTR R33', 'GTR R34', 'GTR R35'];
  const partTypes = ['Engine', 'Suspension', 'Brakes', 'Exhaust', 'Turbo'];
  const next12Months = Array.from({length: 12}, (_, i) => i + 1);

  return {
    inventoryPredictions: models.flatMap(model => 
      partTypes.map(partType => ({
        model,
        partType,
        currentStock: Math.floor(Math.random() * 100) + 50,
        predictedDemand: Math.floor(Math.random() * 150) + 75,
        recommendedRestock: Math.floor(Math.random() * 100) + 25,
        stockoutProbability: Math.random() * 0.2,
      }))
    ),
    demandForecast: models.map(model => ({
      model,
      ...next12Months.reduce((acc, month) => {
        acc[`month${month}`] = Math.floor(Math.random() * 100) + 50;
        return acc;
      }, {}),
    })),
    potentialRevenue: models.reduce((acc, model) => {
      acc[model] = Math.floor(Math.random() * 1000000) + 500000;
      return acc;
    }, {}),
    mlAccuracy: {
      demandPrediction: 0.92,
      stockoutPrediction: 0.88,
      revenueForecast: 0.85,
    },
  };
};

const MLInventoryDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // In a real scenario, this would fetch data from an ML model API
    setData(generateMLPredictionData());
  }, []);

  if (!data) return <div>Loading...</div>;

  const totalPredictedDemand = data.inventoryPredictions.reduce((sum, item) => sum + item.predictedDemand, 0);
  const averageStockoutProbability = data.inventoryPredictions.reduce((sum, item) => sum + item.stockoutProbability, 0) / data.inventoryPredictions.length;
  const totalRecommendedRestock = data.inventoryPredictions.reduce((sum, item) => sum + item.recommendedRestock, 0);
  const totalPotentialRevenue = Object.values(data.potentialRevenue).reduce((sum, value) => sum + value, 0);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">ML-Driven Inventory Management Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <TrendingUp className="h-10 w-10 text-blue-500 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-500">Total Predicted Demand</p>
              <h2 className="text-2xl font-bold">{totalPredictedDemand.toLocaleString()}</h2>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <AlertCircle className="h-10 w-10 text-red-500 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Stockout Probability</p>
              <h2 className="text-2xl font-bold">{(averageStockoutProbability * 100).toFixed(2)}%</h2>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <Package className="h-10 w-10 text-green-500 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-500">Recommended Restock</p>
              <h2 className="text-2xl font-bold">{totalRecommendedRestock.toLocaleString()}</h2>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <DollarSign className="h-10 w-10 text-purple-500 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-500">Potential Revenue</p>
              <h2 className="text-2xl font-bold">${totalPotentialRevenue.toLocaleString()}</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">12-Month Demand Forecast by Model</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data.demandForecast}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="model" />
            <YAxis />
            <Tooltip />
            <Legend />
            {Array.from({length: 12}, (_, i) => i + 1).map(month => (
              <Line key={month} type="monotone" dataKey={`month${month}`} name={`Month ${month}`} stroke={`hsl(${month * 30}, 70%, 50%)`} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Inventory Status and ML Predictions</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data.inventoryPredictions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="model" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="currentStock" fill="#8884d8" name="Current Stock" />
            <Bar dataKey="predictedDemand" fill="#82ca9d" name="Predicted Demand" />
            <Bar dataKey="recommendedRestock" fill="#ffc658" name="Recommended Restock" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Potential Revenue by Model</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={Object.entries(data.potentialRevenue).map(([model, revenue]) => ({ model, revenue }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">ML Model Accuracy</h2>
          <div className="space-y-4">
            {Object.entries(data.mlAccuracy).map(([metric, accuracy]) => (
              <div key={metric} className="flex justify-between items-center">
                <span className="text-sm font-medium">{metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                <span className="text-2xl font-bold">{(accuracy * 100).toFixed(2)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLInventoryDashboard;