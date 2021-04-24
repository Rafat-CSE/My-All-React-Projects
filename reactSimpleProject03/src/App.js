import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {

  const [allUsers, setAllUsers] = useState([]);

  const allUsersHandler = (uName, uAge) => {
    setAllUsers((prevAllUsers) => [...prevAllUsers, { name: uName, age: uAge, id: Math.random().toString() }]);
  };

  return (
    <div>
      <AddUser onUsersList={allUsersHandler} />
      <UsersList users={allUsers} />
    </div>
  );
}

export default App;
