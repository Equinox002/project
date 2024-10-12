import React, { useState, useEffect } from 'react';
import "../styles/UserForm.css";

function UserForm({ addUser, updateUser, selectedUser }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: '',
    location: '',
    department: ''
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      selectedUser ? updateUser(formData) : addUser(formData);
      resetForm();
    }
  };

  const validateForm = () => {
    const { firstName, lastName, phone, email, role, location, department } = formData;
    
    // Phone number regex (validates 10-digit numbers)
    const phoneRegex = /^[0-9]{10}$/;
    
    if (!firstName || !lastName || !phone || !email || !role || !location || !department) {
      alert('All fields are mandatory.');
      return false;
    }

    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      role: '',
      location: '',
      department: ''
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>{selectedUser ? "Update User" : "Add User"}</h2>
      <div className="form-row">
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Phone *</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>
        <div className="form-group">
          <label>Email ID *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Id"
            disabled={!!selectedUser}  
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Role *</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
          />
        </div>
        <div className="form-group">
          <label>Location *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Department *</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
          />
        </div>
      </div>
      <p className="mandatory">All fields are mandatory</p>
      <button type="submit">{selectedUser ? "Update" : "Add"}</button>
    </form>
  );
}

export default UserForm;
