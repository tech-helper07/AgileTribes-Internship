import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CityPage = () => {
  const { cityName } = useParams();

  useEffect(() => {
    // Update document title dynamically
    document.title = `Welcome to ${cityName} Page`;
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'React Learning Tasks';
    };
  }, [cityName]);

  const getCityInfo = (city) => {
    const cityData = {
      paris: {
        country: 'France',
        population: '2.16 million',
        famous: 'Eiffel Tower, Louvre Museum, Notre-Dame Cathedral'
      },
      tokyo: {
        country: 'Japan',
        population: '13.96 million',
        famous: 'Tokyo Tower, Senso-ji Temple, Shibuya Crossing'
      },
      newyork: {
        country: 'United States',
        population: '8.38 million',
        famous: 'Statue of Liberty, Central Park, Times Square'
      },
      london: {
        country: 'United Kingdom',
        population: '8.98 million',
        famous: 'Big Ben, London Eye, Buckingham Palace'
      }
    };

    return cityData[city.toLowerCase()] || {
      country: 'Unknown',
      population: 'Unknown',
      famous: 'Discover the beauty of this city!'
    };
  };

  const cityInfo = getCityInfo(cityName);
  const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  return (
    <div className="task-container">
      <h2>Task 5: Dynamic Page Title</h2>
      <div className="task-content">
        <h1>Welcome to {formattedCityName} Page</h1>
        <p><em>Check your browser tab - the title changed dynamically!</em></p>
        
        <div className="city-info-card">
          <h3>{formattedCityName}</h3>
          <p><strong>Country:</strong> {cityInfo.country}</p>
          <p><strong>Population:</strong> {cityInfo.population}</p>
          <p><strong>Famous for:</strong> {cityInfo.famous}</p>
        </div>

        <div className="city-links">
          <h4>Try other cities:</h4>
          <Link to="/city/paris" className="city-link">Paris</Link>
          <Link to="/city/tokyo" className="city-link">Tokyo</Link>
          <Link to="/city/newyork" className="city-link">New York</Link>
          <Link to="/city/london" className="city-link">London</Link>
        </div>
      </div>
    </div>
  );
};

export default CityPage;