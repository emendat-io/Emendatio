import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, DollarSign, Package } from 'lucide-react';

const generateBusinessData = () => {
  const models = ['350Z', '370Z', 'GTR R32', 'GTR R33', 'GTR R34', 'GTR R35'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  return {
    revenueTrend: months.map(month => ({
      month,
      revenue: Math.floor(Math.random() * 500000) + 200000,
    })),
    modelPerformance: models.map(model => ({
      model,
      revenue: Math.floor(Math.random() * 1000000) + 500000,
      profit: Math.floor(Math.random() * 300000) + 100000,
      salesVolume: Math.floor(Math.random() * 1000) + 200,
    })),
    inventoryTurnover: models.map(model => ({
      model,
      turnoverRate: (Math.random() * 5 + 2).toFixed(2),
    })),
    customerSatisfaction: [
      { name: 'Satisfied', value: 75 },
      { name: 'Neutral', value: 20 },
      { name: 'Unsatisfied', value: 5 },
    ],
  };
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const BusinessDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // In a real scenario, this would fetch data from an API
    setData(generateBusinessData());
  }, []);

  if (!data) return <div>Loading...</div>;

  const totalRevenue = data.modelPerformance.reduce((sum, item) => sum + item.revenue, 0);
  const totalProfit = data.modelPerformance.reduce((sum, item) => sum + item.profit, 0);
  const averageTurnoverRate = data.inventoryTurnover.reduce((sum, item) => sum + parseFloat(item.turnoverRate), 0) / data.inventoryTurnover.length;

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Performance Parts Business Intelligence Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <DollarSign className="h-10 w-10 text-blue-500 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <h2 className="text-2xl font-bold">${totalRevenue.toLocaleString()}</h2>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <TrendingUp className="h-10 w-10 text-green-500 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-500">Total Profit</p>
              <h2 className="text-2xl font-bold">${totalProfit.toLocaleString()}</h2>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <Package className="h-10 w-10 text-orange-500 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Inventory Turnover</p>
              <h2 className="text-2xl font-bold">{averageTurnoverRate.toFixed(2)}</h2>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center">
            <AlertCircle className="h-10 w-10 text-red-500 mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-500">Customer Satisfaction</p>
              <h2 className="text-2xl font-bold">{data.customerSatisfaction[0].value}%</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Revenue Trend (Last 6 Months)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.revenueTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Model Performance Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.modelPerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="model" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue" />
            <Bar yAxisId="right" dataKey="salesVolume" fill="#82ca9d" name="Sales Volume" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Inventory Turnover Rate by Model</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.inventoryTurnover}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="turnoverRate" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Customer Satisfaction</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.customerSatisfaction}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.customerSatisfaction.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;