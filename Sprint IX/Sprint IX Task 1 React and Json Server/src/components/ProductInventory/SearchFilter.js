import React from 'react';

const SearchFilter = ({ 
  searchQuery, 
  selectedCategory, 
  categories, 
  onSearch, 
  onCategoryFilter, 
  onClearFilters 
}) => {
  return (
    <div className="search-filter-container">
      <div className="filter-row">
        <div className="search-box">
          <label htmlFor="search">🔍 Search Products:</label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search by product name..."
            className="search-input"
          />
        </div>
        
        <div className="category-filter">
          <label htmlFor="category">🏷️ Filter by Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => onCategoryFilter(e.target.value)}
            className="category-select"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        {(searchQuery || selectedCategory) && (
          <button 
            onClick={onClearFilters}
            className="btn btn-clear"
          >
            Clear Filters
          </button>
        )}
      </div>
      
      {(searchQuery || selectedCategory) && (
        <div className="active-filters">
          <span>Active filters: </span>
          {searchQuery && <span className="filter-tag">Search: "{searchQuery}"</span>}
          {selectedCategory && <span className="filter-tag">Category: {selectedCategory}</span>}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;