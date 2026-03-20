import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/slices/filterSlice';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  
  let filteredProducts = [...products];
  if (filters.category !== 'all') filteredProducts = filteredProducts.filter(p => p.category === filters.category);
  filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);
  if (filters.searchQuery) filteredProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(filters.searchQuery.toLowerCase()));
  if (filters.sortBy === 'price-asc') filteredProducts.sort((a, b) => a.price - b.price);
  else if (filters.sortBy === 'price-desc') filteredProducts.sort((a, b) => b.price - a.price);
  
  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading amazing products...</p>
      </div>
    );
  }
  
  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Our Collection</h1>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for products..." 
            value={filters.searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <FilterSidebar />
        
        <div style={{ flex: 1 }}>
          <div className="products-count">
            Showing {filteredProducts.length} of {products.length} products
          </div>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;