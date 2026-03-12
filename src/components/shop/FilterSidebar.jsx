import React, { useState } from 'react';

const FilterSidebar = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCats, setSelectedCats] = useState([]);

  const [selectedAccs, setSelectedAccs] = useState([]);
  const [isAccOpen, setIsAccOpen] = useState(false);

  const brandsData = [
    { name: 'Apple', categories: ['iPhones', 'MacBooks', 'AirPods', 'Apple Watch'] },
    { name: 'Samsung', categories: ['Galaxy S', 'Galaxy Z', 'Tablets'] },
    { name: 'Google', categories: ['Pixel Phones', 'Pixel Buds'] },
    { name: 'Motorola', categories: ['Edge Series', 'Razr'] }
  ];

  const accessoriesData = [
    { id: 'lcd', name: 'LCD Screens' },
    { id: 'batteries', name: 'Batteries' },
    { id: 'chargers', name: 'Chargers' },
    { id: 'cases', name: 'Protective Cases' }
  ];

  const toggleBrand = (brandName) => {
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brandName));
      // Brand uncheck hone par uski categories bhi remove karni hon to yahan logic add ho sakta hai
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  const toggleCategory = (catName) => {
    setSelectedCats(prev =>
      prev.includes(catName) ? prev.filter(c => c !== catName) : [...prev, catName]
    );
  };


  const toggleAcc = (id) => {
    setSelectedAccs(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white p-5 border border-gray-100 rounded-2xl shadow-sm select-none">
      <h3 className="text-lg font-bold mb-5 text-gray-800">Filters</h3>

      {/* Brands & Dynamic Categories */}
      <div className="mb-6">
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Brands</h4>

        <div className="space-y-1.5"> {/* Brands ke darmiyan space kam kar di gayi hai */}
          {brandsData.map((brand) => (
            <div key={brand.name} className="overflow-hidden">
              {/* Brand Row */}
              <div className="flex items-center gap-3 py-1">
                <input
                  type="checkbox"
                  id={brand.name}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  onChange={() => toggleBrand(brand.name)}
                  checked={selectedBrands.includes(brand.name)}
                />
                <label
                  htmlFor={brand.name}
                  className={`text-sm cursor-pointer flex-1 transition-colors ${selectedBrands.includes(brand.name) ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'
                    }`}
                >
                  {brand.name}
                </label>
              </div>

              {/* Sub-Categories (Collapse with Checkboxes) */}
              {selectedBrands.includes(brand.name) && (
                <div className="ml-7 mb-2 space-y-1 border-l-2 border-gray-50 pl-3 animate-in slide-in-from-top-1 duration-200">
                  {brand.categories.map((cat) => (
                    <div key={cat} className="flex items-center gap-2 py-0.5">
                      <input
                        type="checkbox"
                        id={cat}
                        className="w-3.5 h-3.5 rounded border-gray-300 text-blue-500 focus:ring-blue-400 cursor-pointer"
                        onChange={() => toggleCategory(cat)}
                        checked={selectedCats.includes(cat)}
                      />
                      <label htmlFor={cat} className="text-xs text-gray-500 cursor-pointer hover:text-blue-500 transition-colors">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


      {/* Accessories Section */}
      <div className="mb-6 pt-2 border-t border-gray-50">
        <div
          className="flex items-center justify-between cursor-pointer group"
          onClick={() => setIsAccOpen(!isAccOpen)}
        >
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">
            Accessories
          </h4>
          <span className={`text-gray-400 transition-transform duration-300 ${isAccOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>

        {/* Dropdown Content */}
        {isAccOpen && (
          <div className="mt-3 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
            {accessoriesData.map((item) => (
              <div key={item.id} className="flex items-center gap-3 py-1">
                <input
                  type="checkbox"
                  id={item.id}
                  checked={selectedAccs.includes(item.id)}
                  onChange={() => toggleAcc(item.id)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <label
                  htmlFor={item.id}
                  className={`text-sm cursor-pointer flex-1 transition-colors ${selectedAccs.includes(item.id) ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'
                    }`}
                >
                  {item.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>



      {/* Price Range Section with Inputs */}
      <div className="pt-5 border-t border-gray-100">
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">Price Range</h4>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
            <input
              type="number"
              placeholder="Min"
              className="w-full pl-5 pr-2 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          <span className="text-gray-400 text-xs">—</span>
          <div className="relative flex-1">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
            <input
              type="number"
              placeholder="Max"
              className="w-full pl-5 pr-2 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>

      </div>


      <button className="w-full mt-4 bg-[#1D73BE] text-white py-2 rounded-lg text-xs font-bold hover:bg-[#175A94] transition-colors shadow-sm">
        Apply Price
      </button>

    </div>
  );
};

export default FilterSidebar;