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

        <div className="user-logo">
          <h2 className="logo-text">
            Olive Library
          </h2>
        </div>

        <ul className="user-menu">

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

        </ul>
        <div className="user-right">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>

      </nav>

      <div className="user-content">

        <Routes>
         <Route path="home" element={<UserHome />} />
         <Route path="browse-books" element={<BrowseBooks />} />
         <Route path="my-books" element={<MyBooks />} />
        </Routes>

      </div>

    </div>
  );
};

export default UserNavbar;