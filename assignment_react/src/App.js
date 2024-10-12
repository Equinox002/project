import React, { useState, useRef } from 'react';
import UserForm from "../src/Components/UserForm" ;
import UserList from "../src/Components/UserList" ;


function App() {
  const [users, setUsers] = useState([
    
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const formRef = useRef(null);  

  const addUser = (user) => {
    const existingUser = users.find((u) => u.email === user.email);
    if (!existingUser) {
      setUsers([...users, user]);
    } else {
      alert('Duplicate email not allowed.');
    }
  };

  const updateUser = (user) => {
    const updatedUsers = users.map((u) => (u.email === user.email ? user : u));
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    formRef.current.scrollIntoView({ behavior: 'smooth' });  
  };
  return (
    <div>
      <div ref={formRef}>  
        <UserForm addUser={addUser} updateUser={updateUser} selectedUser={selectedUser} />
      </div>
      <UserList users={users} setSelectedUser={handleEditUser} />
    </div>
  );
}

export default App;