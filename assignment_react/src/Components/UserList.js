import { useState } from "react";
import "../styles/UserList.css"

function UserList({ users, setSelectedUser }) {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredUsers = users.filter((user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="user-list">
        <h2>Manage Users</h2>
        <div className="search-add">
          <input
            type="text"
            placeholder="Search for email"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th>Role</th>
              <th>Location</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.email}>
              <td style={{fontWeight:"bold"}}>{user.firstName} {user.lastName}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.location}</td>
              <td>{user.department}</td>
              <td>
                <button onClick={() => setSelectedUser(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;  