import {
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';
import UserProfile from './pages/UserProfile';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Admin from './pages/Admin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isAdmin = true;
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location);

  const from = location.state?.from || '/profile';

  return (
    <>
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/admin'>Admin</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={
            <LoginPage
              onSuccess={() => navigate(from)}
              setAuthenticated={setIsAuthenticated}
            />
          }
        />

        <Route
          path='/profile'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfile setAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        />

        <Route
          path='/admin'
          element={
            <ProtectedRoute isAdmin={isAdmin} isAuthenticated={isAuthenticated}>
              <Admin setAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
