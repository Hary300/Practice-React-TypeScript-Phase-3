import { Link, Outlet } from 'react-router-dom';

export default function Admin() {
  return (
    <>
      <div className='flex gap-4'>
        <Link to='products'>Products</Link>
        <Link to='settings'>Settings</Link>
        <Link to='users'>Users</Link>
      </div>

      <hr />
      <h1>Admin page</h1>

      <Outlet />
    </>
  );
}
