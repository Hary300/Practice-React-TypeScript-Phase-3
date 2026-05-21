import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './pages/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import Admin from './pages/Admin';

type User = {
  isAuthenticated: boolean;
  role: 'user' | 'admin' | '';
};

const defaultUser: User = {
  isAuthenticated: false,
  role: '',
};

function App() {
  const [user, setUser] = useState<User>(defaultUser);
  return (
    <>
      <div className='flex gap-4'>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
        {user.role === 'user' && <Link to={'/user'}>User</Link>}
        {user.role === 'admin' && <Link to={'/admin'}>Admin</Link>}
      </div>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<LoginPage setUser={setUser} />} />

        <Route
          path='/user'
          element={
            <ProtectedRoute user={user} allowedRole='user'>
              <UserProfile setUser={setUser} />
            </ProtectedRoute>
          }
        />

        <Route
          path='/admin'
          element={
            <ProtectedRoute user={user} allowedRole='admin'>
              <Admin setUser={setUser} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
