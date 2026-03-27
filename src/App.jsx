import {  HashRouter, Route, Routes } from 'react-router-dom';
import MainNavbar from './pages/MainNavbar';
import AdminNavbar from './admin/AdminNavbar';
import UserNavbar from './user/UserNavbar';

function App() {

  const isAdmin =
    sessionStorage.getItem('isAdmin') === 'true';

  const isUser =
    sessionStorage.getItem('isUser') === 'true';

  return (
    <HashRouter>

       <Routes>
        <Route path="/*" element={<MainNavbar />} />
        <Route path="/admin/*" element={<AdminNavbar />} />
        <Route path="/user/*" element={<UserNavbar />} />
      </Routes>

    </HashRouter>
  );
}

export default App;