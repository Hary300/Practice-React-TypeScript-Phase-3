import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import ProductDetail from './pages/ProductDetail';
import Post from './pages/Post';

function App() {
  return (
    <>
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/users/hary'>hary page</Link>
        <Link to='/users/john'>john page</Link>
        <Link to='/products/1'>Product 1</Link>
        <Link to='/products/2'>Product 2</Link>
        <Link to='/users/hary/posts/99'>Post 99</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/:username' element={<Users />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/users/:username/posts/:id' element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
