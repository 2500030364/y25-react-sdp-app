import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const UserLogin = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    const users =
      JSON.parse(localStorage.getItem('libraryUsers')) || [];

    const user = users.find(
      u =>
        u.username === formData.username &&
        u.password === formData.password
    );

    if (user) {

      sessionStorage.setItem('isUser', 'true');
      sessionStorage.setItem('userUsername', user.username);
      sessionStorage.setItem('userName', user.fullName);

      alert('Login successful');

      setFormData({
        username: '',
        password: ''
      });

      navigate('/user/home');
      window.location.reload();

    } else {

      alert('Invalid username or password');

      setFormData({
        username: '',
        password: ''
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>User Login</h1>

        <form onSubmit={handleSubmit}>

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
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default UserLogin;