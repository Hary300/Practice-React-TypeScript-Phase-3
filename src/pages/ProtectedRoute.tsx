import { Navigate } from 'react-router-dom';
import type { Role, User } from '../types/auth';

type ProtectedRouteProps = {
  user: User;
  allowedRole: Role;
  children: React.ReactNode;
};

export default function ProtectedRoute({
  user,
  allowedRole,
  children,
}: ProtectedRouteProps) {
  if (!user.isAuthenticated) {
    return <Navigate to={'/login'} />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to={'/login'} />;
  }

  return children;
}
