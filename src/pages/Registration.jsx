import React, { useState } from 'react';
import './style.css';

const Registration = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers =
      JSON.parse(localStorage.getItem('libraryUsers')) || [];

    const userExists = existingUsers.find(
      user => user.username === formData.username
    );

    if (userExists) {
      alert('Username already exists');
      return;
    }

    const newUser = {
      ...formData,
      id: Math.floor(Math.random() * 900000) + 100000,
      registeredAt: new Date().toLocaleString()
    };

    existingUsers.push(newUser);

    localStorage.setItem('libraryUsers',
      JSON.stringify(existingUsers)
    );

    alert('Registration successful');

    setFormData({
      fullName: '',
      email: '',
      username: '',
      password: ''
    });
  };

  return (
    <div className="registration-container">
      <div className="registration-card">

        <h1>User Registration</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>

        </form>

      </div>
    </div>
  );
};

export default Registration;