import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchProduct();
  }, [id]);
  
  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      }));
      alert('✨ Added to cart!');
    }
  };
  
  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="empty-cart">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/shop')} className="shop-now-btn">
          Back to Shop
        </button>
      </div>
    );
  }
  
  return (
    <div className="product-detail-page">
      <button onClick={() => navigate('/shop')} className="back-button">
        ← Back to Shop
      </button>
      
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        
        <div className="product-detail-info">
          <h1>{product.title}</h1>
          <div className="product-meta">
            <span>{product.brand}</span>
            <span>{product.category}</span>
          </div>
          <div className="product-rating-large">
            ⭐ {product.rating} / 5 ({product.stock} reviews)
          </div>
          <div className="product-price-large">${product.price}</div>
          <div className="product-stock">
            {product.stock > 0 ? `✓ In Stock (${product.stock} available)` : '✗ Out of Stock'}
          </div>
          <p className="product-description">{product.description}</p>
          <button 
            onClick={handleAddToCart}
            className="add-to-cart-large"
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;