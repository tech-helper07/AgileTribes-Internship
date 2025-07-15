import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Invalid credentials. Try admin/password');
    } else {
      setError('');
    }
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <div style={{ padding: '20px', border: '2px solid #ccc', margin: '10px', width: '400px', textAlign: 'center', borderRadius: 20 }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Username (try: admin)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '5px', width: '200px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Password (try: password)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '5px', width: '200px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 30px', backgroundColor: 'Blueviolet', color: 'white', borderRadius: '10px' }}>
          Login
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;