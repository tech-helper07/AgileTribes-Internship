import React, { useState, useEffect } from 'react';



function DataFetcher() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) return <div className="p-4 border rounded bg-yellow-50">Loading...</div>;
  if (error) return <div className="p-4 border rounded bg-red-50">Error: {error}</div>;
  
  return (
    <div className="app-container">
      <h3 className="font-bold text-lg mb-2">Task 3: API Data Fetcher</h3>
      <p><strong>User Name:</strong> {userData?.name}</p>
      <p><strong>Email:</strong> {userData?.email}</p>
      {/* <p className="text-sm text-gray-600 mt-2">
        <strong>Explanation:</strong> We fetch data on mount and handle loading/error states properly.
      </p> */}
    </div>
  );
}


export default DataFetcher;