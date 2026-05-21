import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './pages/ProtectedRoute';
import LoginPage from './pages/LoginPage';

function App() {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  return (
    <>
      <div className='flex gap-4'>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/login'
          element={<LoginPage setAuthenticated={setAuthenticated} />}
        />

        <Route
          path='/profile'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfile setAuthenticated={setAuthenticated} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
