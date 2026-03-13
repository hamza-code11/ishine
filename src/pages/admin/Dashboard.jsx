import React from "react";
import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Package,
  TrendingUp,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Revenue", value: "$45,231", change: "+20.1%", icon: DollarSign, color: "blue" },
    { title: "Orders", value: "356", change: "+12.5%", icon: ShoppingBag, color: "green" },
    { title: "Customers", value: "2,345", change: "+8.2%", icon: Users, color: "purple" },
    { title: "Products", value: "124", change: "+3.1%", icon: Package, color: "orange" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 flex items-center gap-2">
          <TrendingUp size={16} />
          Export Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 bg-${stat.color}-100 rounded-lg`}>
                <stat.icon size={24} className={`text-${stat.color}-600`} />
              </div>
              <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl border">
        <div className="p-6 border-b">
          <h3 className="font-semibold">Recent Orders</h3>
        </div>
        <div className="divide-y">
          {[1,2,3,4].map(i => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Clock size={16} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Order #00{i}</p>
                  <p className="text-sm text-gray-400">2 items • $125.00</p>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                Delivered
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;