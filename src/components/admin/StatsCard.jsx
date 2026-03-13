import React from "react";
import { TrendingUp, TrendingDown, MoreVertical } from "lucide-react";

const StatsCard = ({ title, value, change, icon: Icon, color = "blue" }) => {
  const colors = {
    blue: {
      bg: "bg-gradient-to-br from-blue-500 to-blue-600",
      light: "bg-blue-50",
      text: "text-blue-600"
    },
    green: {
      bg: "bg-gradient-to-br from-green-500 to-green-600",
      light: "bg-green-50",
      text: "text-green-600"
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-500 to-purple-600",
      light: "bg-purple-50",
      text: "text-purple-600"
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-500 to-orange-600",
      light: "bg-orange-50",
      text: "text-orange-600"
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${colors[color].light} group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} className={colors[color].text} />
        </div>
        <button className="text-gray-300 hover:text-gray-400 transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>
      
      <div>
        <p className="text-sm text-gray-400 font-medium mb-1">{title}</p>
        <div className="flex items-end justify-between">
          <p className="text-2xl font-bold text-gray-800">{value}</p>
          
          {change !== undefined && (
            <div className={`
              flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium
              ${change >= 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}
            `}>
              {change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span>{change >= 0 ? '+' : ''}{change}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar (optional) */}
      <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${colors[color].bg} rounded-full`}
          style={{ width: `${Math.min(Math.abs(change || 0), 100)}%` }}
        />
      </div>
    </div>
  );
};

export default StatsCard;