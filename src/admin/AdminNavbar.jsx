import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';
import AddBook from './AddBook';
import ViewBooks from './ViewBooks';
import './admin.css';

const AdminNavbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    sessionStorage.removeItem('adminUsername');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="admin-container">

      <nav className="admin-navbar">

        <div className="admin-logo">
          <h2 className="logo-link">
            Olive Library
            </h2>
            </div>
        <ul className="admin-menu">
          <li>
            <Link to="/admin/home" className="nav-link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/admin/add-book" className="nav-link">
              Add Book
            </Link>
          </li>

          <li>
            <Link to="/admin/view-books" className="nav-link">
              View Books
            </Link>
          </li>

        </ul>
        <div className="admin-right">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>

      </nav>

      <div className="admin-content">

        <Routes>
          <Route path="home" element={<AdminHome />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="view-books" element={<ViewBooks />} />
          
        </Routes>

      </div>

    </div>
  );
};

export default AdminNavbar;