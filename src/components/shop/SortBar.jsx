    import React from 'react';

const SortBar = () => {
  return (
    <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl border border-gray-100">
      <p className="text-gray-600 text-sm">Showing <span className="font-semibold text-gray-900">12</span> Products</p>
      
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-500">Sort by:</label>
        <select className="text-sm border-none focus:ring-0 font-medium text-gray-800 cursor-pointer">
          <option>Newest Arrivals</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;