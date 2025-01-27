import React, { useState } from 'react';
import {
  BarChart3,
  PieChart,
  Globe,
  DollarSign,
  BarChart,
  Calculator,
  Brain,
  Lightbulb,
  ClipboardList,
  SlidersHorizontal,
  FileSpreadsheet,
  ArrowRight,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

interface NavItem {
  title: string;
  icon: React.ReactNode;
  subItems?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: 'Descriptive',
    icon: <BarChart3 className="w-5 h-5" />,
    subItems: [
      { title: 'Executive Summary', icon: <BarChart className="w-4 h-4" /> },
      { title: 'Category Summary', icon: <PieChart className="w-4 h-4" /> },
      { title: 'Regional Summary', icon: <Globe className="w-4 h-4" /> },
      { title: 'Price - Market Landscape', icon: <DollarSign className="w-4 h-4" /> },
      { title: 'Price & Distribution', icon: <BarChart className="w-4 h-4" /> },
      { title: 'P&L', icon: <Calculator className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Diagnostic',
    icon: <Brain className="w-5 h-5" />,
    subItems: [
      { title: 'Model Evaluation 1', icon: <BarChart className="w-4 h-4" /> },
      { title: 'Model Evaluation 2', icon: <BarChart className="w-4 h-4" /> },
      { title: 'Model Results', icon: <FileSpreadsheet className="w-4 h-4" /> },
    ],
  },
  {
    title: 'Predictive & Prescriptive',
    icon: <Lightbulb className="w-5 h-5" />,
    subItems: [
      { title: 'Optimization Guide', icon: <ClipboardList className="w-4 h-4" /> },
      { title: 'Task Summary', icon: <ClipboardList className="w-4 h-4" /> },
      { title: 'Simulation/Optimization', icon: <SlidersHorizontal className="w-4 h-4" /> },
      { title: 'Scenario Summary', icon: <FileSpreadsheet className="w-4 h-4" /> },
      {
        title: 'Scenario Review',
        icon: <FileSpreadsheet className="w-4 h-4" />,
        subItems: [
          { title: 'Scenario Overall Results', icon: <ArrowRight className="w-4 h-4" /> },
          { title: 'MFG P&L Waterfall', icon: <ArrowRight className="w-4 h-4" /> },
          { title: 'MFG P&L Tabular View', icon: <ArrowRight className="w-4 h-4" /> },
          { title: 'Customer Waterfall', icon: <ArrowRight className="w-4 h-4" /> },
          { title: 'Customer Tabular View', icon: <ArrowRight className="w-4 h-4" /> },
        ],
      },
    ],
  },
];

const NavItem = ({ item, depth = 0 }: { item: NavItem; depth?: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-purple-700 transition-colors
          ${depth > 0 ? 'pl-' + (depth * 4 + 4) + ' text-gray-300' : ''}`}
      >
        <span className="mr-2">{item.icon}</span>
        <span className="flex-1 text-left">{item.title}</span>
        {hasSubItems && (
          <span className="ml-auto">
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </span>
        )}
      </button>
      {isOpen && hasSubItems && (
        <div className="mt-1">
          {item.subItems.map((subItem, index) => (
            <NavItem key={index} item={subItem} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-purple-900 transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-16'
      } hover:w-64 z-10`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-4">
        <img
          src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop"
          alt="Logo"
          className="w-8 h-8 mx-auto rounded-full"
        />
      </div>
      <nav className="mt-4">
        {navigation.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;