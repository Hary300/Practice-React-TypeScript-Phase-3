import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
  return (
    <>
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
