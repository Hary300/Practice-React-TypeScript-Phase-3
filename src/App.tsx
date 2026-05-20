import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Songs from './pages/Songs';

function App() {
  return (
    <>
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/songs'>Songs</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/songs' element={<Songs />} />
      </Routes>
    </>
  );
}

export default App;
