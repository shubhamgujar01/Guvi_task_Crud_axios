import React, { useState } from 'react';

function AddUser({ addUser }) {
  const [newUser, setNewUser] = useState({});

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUser);
    setNewUser({});
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleInputChange} />
        <input type="text" name="username" placeholder="username" value={newUser.username} onChange={handleInputChange} />
        <input type="number" name="phone" placeholder="phone" value={newUser.phone} onChange={handleInputChange} />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
