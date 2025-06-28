import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Users = () => {
  const { id } = useParams();

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
  ];

  return (
    <div className="page">
      <h1>All Users List</h1>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1>User Page {id}</h1>
        <p>This is the user page.</p>
        <p>Here you can find user-specific information and settings.</p>
        <p>Feel free to explore the features available for users.</p>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', margin: 'auto', width: '80%' }}>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
            <span style={{color:'black', fontSize: '1.3rem', fontWeight: 'bold', margin:'19px 7px 19px'}}>Name:</span> {user.name} 
            <span style={{color:'black', fontSize: '1.3rem', fontWeight: 'bold', margin:'19px 7px 19px'}}>Email:</span> {user.email} 
            <span style={{color:'black', fontSize: '1.3rem', fontWeight: 'bold', margin:'19px 7px 19px'}}>Role:</span> {user.role}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
