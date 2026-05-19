import { Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import Admin from './pages/admin-page/Admin';
import Products from './pages/admin-page/Products';
import Settings from './pages/admin-page/Settings';
import Users from './pages/admin-page/Users';

function App() {
  return (
    <>
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/admin'>Admin</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='admin' element={<Admin />}>
          <Route path='products' element={<Products />} />
          <Route path='settings' element={<Settings />} />
          <Route path='users' element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
