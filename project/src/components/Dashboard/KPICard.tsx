import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  subtitle?: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, change, isPositive, subtitle }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-sm font-medium text-purple-900">{title}</h3>
          {subtitle && <p className="text-xs text-neutral-500 mt-1">{subtitle}</p>}
        </div>
        <div
          className={`flex items-center ${
            isPositive ? 'text-emerald-500' : 'text-rose-500'
          } bg-opacity-10 rounded-full p-2`}
        >
          {isPositive ? (
            <TrendingUp className="w-5 h-5" />
          ) : (
            <TrendingDown className="w-5 h-5" />
          )}
        </div>
      </div>
      <div className="space-y-1">
        <span className="text-2xl font-bold text-neutral-900">{value}</span>
        <span
          className={`block text-sm ${
            isPositive ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
};

export default KPICard;