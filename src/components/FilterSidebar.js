import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPriceRange, setSortBy, resetFilters } from '../redux/slices/filterSlice';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [localMin, setLocalMin] = useState(filters.minPrice);
  const [localMax, setLocalMax] = useState(filters.maxPrice);
  
  const categories = ['all', 'beauty', 'fragrances', 'furniture', 'groceries'];
  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
  ];
  
  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>
      
      <div className="filter-section">
        <h4>Categories</h4>
        {categories.map(cat => (
          <label key={cat} className="filter-option">
            <input type="radio" name="category" checked={filters.category === cat} onChange={() => dispatch(setCategory(cat))} />
            <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
          </label>
        ))}
      </div>
      
      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-inputs">
          <input type="number" placeholder="Min" value={localMin} onChange={(e) => setLocalMin(Number(e.target.value))} />
          <span>-</span>
          <input type="number" placeholder="Max" value={localMax} onChange={(e) => setLocalMax(Number(e.target.value))} />
        </div>
        <button onClick={() => dispatch(setPriceRange({ min: localMin, max: localMax }))} className="apply-btn">
          Apply Price
        </button>
      </div>
      
      <div className="filter-section">
        <h4>Sort By</h4>
        <select onChange={(e) => dispatch(setSortBy(e.target.value))} value={filters.sortBy}>
          {sortOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      </div>
      
      <button onClick={() => { dispatch(resetFilters()); setLocalMin(0); setLocalMax(1000); }} className="reset-btn">
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;