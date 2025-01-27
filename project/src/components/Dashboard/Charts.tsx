import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { theme } from '../../styles/theme';

const marketShareData = [
  { month: 'Jan', MONDELEZ: 40, SCORA: 15, MARATA: 8, ENOVA: 5 },
  { month: 'Feb', MONDELEZ: 39, SCORA: 15.5, MARATA: 8.2, ENOVA: 5.1 },
  { month: 'Mar', MONDELEZ: 38, SCORA: 16, MARATA: 8.5, ENOVA: 5.2 },
  { month: 'Apr', MONDELEZ: 39, SCORA: 15.8, MARATA: 8.3, ENOVA: 5.1 },
  { month: 'May', MONDELEZ: 40, SCORA: 15.5, MARATA: 8.1, ENOVA: 5 },
  { month: 'Jun', MONDELEZ: 41, SCORA: 15.2, MARATA: 8, ENOVA: 4.9 },
  { month: 'Jul', MONDELEZ: 40.5, SCORA: 15.3, MARATA: 8.1, ENOVA: 5 },
  { month: 'Aug', MONDELEZ: 40.2, SCORA: 15.4, MARATA: 8.2, ENOVA: 5.1 },
  { month: 'Sep', MONDELEZ: 40.8, SCORA: 15.2, MARATA: 8, ENOVA: 4.9 },
  { month: 'Oct', MONDELEZ: 41, SCORA: 15, MARATA: 7.9, ENOVA: 4.8 },
  { month: 'Nov', MONDELEZ: 40.5, SCORA: 15.1, MARATA: 8, ENOVA: 4.9 },
  { month: 'Dec', MONDELEZ: 40.2, SCORA: 15.2, MARATA: 8.1, ENOVA: 5 },
];

const quarterData = [
  { quarter: 'Q1', value: 80000000 },
  { quarter: 'Q2', value: 60000000 },
  { quarter: 'Q3', value: 50000000 },
  { quarter: 'Q4', value: 70000000 },
];

const regionData = [
  { name: 'Area I', value: 13.20 },
  { name: 'Area II', value: 20.97 },
  { name: 'Area III', value: 25.40 },
  { name: 'Area IV', value: 8.39 },
  { name: 'Area V', value: 8.17 },
  { name: 'Area VI', value: 22.86 },
  { name: 'Area VII', value: 9.44 },
];

const channelData = [
  { name: 'C&C', value: 21.20 },
  { name: 'Hyper', value: 15.43 },
  { name: 'Super P', value: 3.74 },
  { name: 'Super G', value: 10.69 },
  { name: 'Traditional', value: 17.10 },
  { name: 'Independents', value: 40.84 },
];

const COLORS = [
  theme.colors.chart.series1,
  theme.colors.chart.series2,
  theme.colors.chart.series3,
  theme.colors.chart.series4,
  theme.colors.chart.series5,
  '#6366F1',
  '#8B5CF6',
];

const Charts = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Market Share Line Chart */}
      <div className="col-span-12 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-purple-900">Volume Market Share</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={marketShareData}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.neutral[200]} />
              <XAxis dataKey="month" stroke={theme.colors.neutral[600]} />
              <YAxis stroke={theme.colors.neutral[600]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="MONDELEZ"
                stroke={theme.colors.chart.series1}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="SCORA"
                stroke={theme.colors.chart.series2}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="MARATA"
                stroke={theme.colors.chart.series3}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="ENOVA"
                stroke={theme.colors.chart.series4}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Value Sales Quarter Analysis */}
      <div className="col-span-12 md:col-span-4 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-purple-900">Value Sales - Quarter Analysis</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={quarterData}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.neutral[200]} />
              <XAxis dataKey="quarter" stroke={theme.colors.neutral[600]} />
              <YAxis stroke={theme.colors.neutral[600]} />
              <Tooltip />
              <Bar dataKey="value" fill={theme.colors.chart.series1} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Region Wise Donut Chart */}
      <div className="col-span-12 md:col-span-4 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-purple-900">Value Sales - Region Wise</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={regionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {regionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Channel Wise Donut Chart */}
      <div className="col-span-12 md:col-span-4 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4 text-purple-900">Value Sales - Channel Wise</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts;