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
/*1  App.jsx
2  MainNavbar.jsx
3  Home.jsx
4  About.jsx
5  Login.jsx
6  Registration.jsx
7  UserLogin.jsx
8  AdminLogin.jsx
9  AdminNavbar.jsx
10 UserNavbar.jsx
11 AdminHome.jsx
12 UserHome.jsx
13 Books.json
14 BookCard.jsx
15 SearchBar.jsx
16 BrowseBooks.jsx
17 MyBooks.jsx
18 ViewBooks.jsx
19 AddBook.jsx
20 Borrow/Return logic
21 Final optimizations
*/