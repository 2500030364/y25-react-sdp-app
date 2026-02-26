import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MainNavbar from './pages/MainNavbar';
import AdminNavbar from './admin/AdminNavbar';
import UserNavbar from './user/UserNavbar';

function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
    const userStatus = sessionStorage.getItem('isUser') === 'true';

    setIsAdmin(adminStatus);
    setIsUser(userStatus);
  }, []);

  return (
    <BrowserRouter>
      {isAdmin && <AdminNavbar />}
      {isUser && <UserNavbar />}
      {!isAdmin && !isUser && <MainNavbar />}
    </BrowserRouter>
  );
}

export default App;