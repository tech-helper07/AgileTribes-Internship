import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
  const {username} = useParams();
  return (
    <div>
      <h1>User {username}</h1>
      <p>This is the user page.</p>
      <p>Here you can find user-specific information and settings.</p>
      <p>Feel free to explore the features available for users.</p>
    </div>
  )
}

export default User;