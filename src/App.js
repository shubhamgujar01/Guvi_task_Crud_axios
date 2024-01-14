
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchList from './FetchList';
import AddUser from './AddUser';




function App() {

  const [users, setUsers] = useState([])
  useEffect(() => {
    // Fetch users from the mock API when the component mounts
    axios.get('https://6545e69efe036a2fa954efdb.mockapi.io/users/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users: ', error);
      });
  }, []);

  const addUser = (newUser) => {
    // Add a new user
    axios.post('https://6545e69efe036a2fa954efdb.mockapi.io/users/users', newUser)
      .then((response) => {
        setUsers([...users, response.data]);
      })
      .catch((error) => {
        console.error('Error adding user: ', error);
      });
  };

  const updateUser = (updatedUser) => {
    // Update the user using their ID
    axios.put(`https://6545e69efe036a2fa954efdb.mockapi.io/users/users/${updatedUser.id}`, updatedUser)
      .then((response) => {
        // Update the user in the list of users
        const updatedUsers = users.map(user => (user.id === updatedUser.id ? updatedUser : user));
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error('Error updating user: ', error);
      });
  };

  const deleteUser = (userId) => {
    axios.delete(`https://6545e69efe036a2fa954efdb.mockapi.io/users/users/${userId}`)
      .then(() => {
        const filteredUsers = users.filter(user => user.id !== userId);
        setUsers(filteredUsers);
      })
      .catch((error) => {
        console.error('Error deleting user: ', error);
      });
  };
  
  return (
    <div className="App">
      <AddUser addUser={addUser}/>
    <FetchList users={users} updateUser={updateUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
