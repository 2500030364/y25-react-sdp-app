import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import UserHome from './UserHome';
import BrowseBooks from './BrowseBooks';
import MyBooks from './MyBooks';
import './user.css';

const UserNavbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isUser');
    sessionStorage.removeItem('userUsername');
    sessionStorage.removeItem('userName');

    navigate('/');
    window.location.reload();
  };

  return (
    <div className="user-container">

      <nav className="user-navbar">

        <div className="navbar-header">
          <h1> Dashboard </h1>
        </div>

        <ul className="navbar-links">

          <li>
            <Link to="/user/home" className="nav-link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/user/browse-books" className="nav-link">
              Browse Books
            </Link>
          </li>

          <li>
            <Link to="/user/my-books" className="nav-link">
              My Books
            </Link>
          </li>

          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>

        </ul>

      </nav>

      <div className="user-content">

        <Routes>
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/browse-books" element={<BrowseBooks />} />
          <Route path="/user/my-books" element={<MyBooks />} />
        </Routes>

      </div>

    </div>
  );
};

export default UserNavbar;