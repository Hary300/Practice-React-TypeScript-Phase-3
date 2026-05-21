import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  isAdmin?: boolean;
  children: React.ReactNode;
};

export default function ProtectedRoute({
  isAuthenticated,
  isAdmin,
  children,
}: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to={'/login'} state={{ from: location.pathname }} />;
  }

  if (isAdmin === false) {
    return <Navigate to={'/'} />;
  }
  return children;
}
