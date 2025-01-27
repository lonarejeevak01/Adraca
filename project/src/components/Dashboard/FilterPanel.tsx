import React, { useState } from 'react';
import { Filter, ChevronRight, ChevronLeft } from 'lucide-react';

const FilterPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filters = [
    { label: 'Year', options: ['2021', '2022', '2023'] },
    { label: 'Quarter', options: ['Q1', 'Q2', 'Q3', 'Q4'] },
    { label: 'Month', options: ['All', 'Jan', 'Feb', 'Mar'] },
    { label: 'Region', options: ['All', 'North', 'South', 'East', 'West'] },
    { label: 'Channel', options: ['All', 'Direct', 'Indirect'] },
    { label: 'Manufacturer', options: ['All', 'MONDELEZ INTL'] },
    { label: 'Category', options: ['POWDERED BEVERA.'] },
    { label: 'Brand', options: ['All', 'Brand A', 'Brand B'] },
  ];

  return (
    <div
      className={`fixed right-0 top-0 h-full bg-white shadow-lg transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-12'
      } hover:w-64 z-10`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4 border-b border-purple-100">
        <div className="flex items-center">
          <Filter className="w-5 h-5 text-purple-900" />
          <span className={`ml-2 font-semibold text-purple-900 ${!isExpanded && 'hidden'}`}>
            Filters
          </span>
        </div>
      </div>
      <div className={`p-4 space-y-4 ${!isExpanded && 'hidden'}`}>
        {filters.map((filter, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-purple-900 mb-1">
              {filter.label}
            </label>
            <select className="w-full border border-purple-200 rounded-md py-1.5 px-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
              {filter.options.map((option, optionIndex) => (
                <option key={optionIndex}>{option}</option>
              ))}
            </select>
          </div>
        ))}
        <button className="w-full bg-purple-900 text-white py-2 rounded-md text-sm hover:bg-purple-800 transition-colors">
          Apply Filters
        </button>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute top-1/2 -left-3 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-shadow"
      >
        {isExpanded ? (
          <ChevronRight className="w-4 h-4 text-purple-900" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-purple-900" />
        )}
      </button>
    </div>
  );
};

export default FilterPanel;