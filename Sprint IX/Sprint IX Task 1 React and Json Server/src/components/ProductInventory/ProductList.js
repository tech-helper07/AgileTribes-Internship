import React from 'react';

const ProductList = ({ products, loading, searchQuery, selectedCategory }) => {
  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (products.length === 0) {
    const hasFilters = searchQuery || selectedCategory;
    return (
      <div className="empty-state">
        {hasFilters ? (
          <p>No products found matching your filters. Try adjusting your search criteria.</p>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <h3>📋 Products ({products.length} found)</h3>
      
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-header">
              <h4>{product.name}</h4>
              <span className="product-category">{product.category}</span>
            </div>
            <div className="product-price">
              ${product.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;