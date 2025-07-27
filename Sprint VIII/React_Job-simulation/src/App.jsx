import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FontProvider } from './context/FontContext';
import FontSizeToggle from './components/FontSizeToggle';
import Post from './components/Post';

const Home = () => (
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <h1>Blog Reader App</h1>
    <p>Welcome to the Blog Reader! Try these sample posts:</p>
    <div style={{ margin: '30px 0' }}>
      {[1, 2, 3, 4, 5].map(id => (
        <Link
          key={id}
          to={`/post/${id}`}
          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          Post {id}
        </Link>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <FontProvider>
      <div className="App">
        <nav style={{ padding: '20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
          <Link to="/" style={{ textDecoration: 'none', fontSize: '20px', color: '#007bff' }}>
           Blog Home
          </Link>
        </nav>
        
        <FontSizeToggle />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Post />} />
        </Routes>
      </div>
    </FontProvider>
  );
}

export default App;