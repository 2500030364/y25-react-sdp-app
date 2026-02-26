import { BrowserRouter } from 'react-router-dom';
import MainNavbar from './pages/MainNavbar';
import AdminNavbar from './admin/AdminNavbar';
import UserNavbar from './user/UserNavbar';

function App() {

  const isAdmin =
    sessionStorage.getItem('isAdmin') === 'true';

  const isUser =
    sessionStorage.getItem('isUser') === 'true';

  return (
    <BrowserRouter>
      {isAdmin && <AdminNavbar />}
      {isUser && <UserNavbar />}
      {!isAdmin && !isUser && <MainNavbar />}
    </BrowserRouter>
  );
}

export default App;