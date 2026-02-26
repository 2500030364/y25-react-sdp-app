import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const AdminLogin = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const defaultUsername = 'admin';
    const defaultPassword = 'admin';

    if (
      formData.username === defaultUsername &&
      formData.password === defaultPassword
    ) {

      sessionStorage.setItem('isAdmin', 'true');
      sessionStorage.setItem('adminUsername', formData.username);

      setFormData({
        username: '',
        password: ''
      });

      window.location.href = '/';

    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Admin Login</h1>

        {/*<p style={{ fontSize: '12px', color: '#666' }}>
          Demo: admin / admin
        </p>*/}

        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {error}
          </div>
        )}

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

export default AdminLogin;