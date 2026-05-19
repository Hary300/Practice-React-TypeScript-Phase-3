import { Link, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className='flex gap-4'>
        <Link to='/'>Home</Link>
        <Link to='/products/1'>product 1</Link>
        <Link to='/products/2'>product 2</Link>
        <Link to='/products/3'>product 3</Link>
        <Link to='/products/4'>product 4</Link>
        <Link to='/products/5'>product 5</Link>
        <Link to='/products/6'>product 6</Link>
        <Link to='/products/7'>product 7</Link>
        <Link to='/products/8'>product 8</Link>
        <Link to='/products/9'>product 9</Link>
        <Link to='/products/10'>product 10</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
