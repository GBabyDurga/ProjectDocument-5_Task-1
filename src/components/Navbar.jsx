import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate } from 'react-router-dom';
import { checkUserRole } from '../services/authService';

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) return null;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="text-xl font-bold text-gray-800">
              Analytics Dashboard
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {checkUserRole(user, 'admin') && (
              <Link to="/admin" className="nav-link">
                Admin Panel
              </Link>
            )}
            {checkUserRole(user, 'analyst') && (
              <Link to="/analyst" className="nav-link">
                Analysis
              </Link>
            )}
            {checkUserRole(user, 'viewer') && (
              <Link to="/viewer" className="nav-link">
                View Data
              </Link>
            )}
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="nav-button"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;