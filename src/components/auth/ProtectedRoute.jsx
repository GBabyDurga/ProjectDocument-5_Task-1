import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { checkUserRole } from '../../services/authService';

function ProtectedRoute({ children, requiredRole }) {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !checkUserRole(user, requiredRole)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute;