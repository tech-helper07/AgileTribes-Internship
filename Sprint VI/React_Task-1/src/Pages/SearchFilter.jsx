import React, {useState} from "react";
const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const items = [
    'Apple', 'Banana', 'Cherry', 'Dates', 'Orange', 
    'Baby Corn', 'Grape', 'Pine Apple', 'Kiwi', 'Lemon'
  ];
  
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <h3 className="search-title"> Search Filter</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search fruits..."
        className="search-input"
      />
      
      <div className="search-results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="search-item">
              {item}
            </div>
          ))
        ) : (
          <p className="search-no-results">No items found</p>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;