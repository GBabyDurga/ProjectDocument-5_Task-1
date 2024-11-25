import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Sign in to access your dashboard</p>
        
        <button 
          className="login-button primary"
          onClick={() => loginWithRedirect()}
        >
          Sign In
        </button>
        
        <div className="sso-options">
          <p>Or continue with</p>
          <div className="sso-buttons">
            <button 
              className="sso-button google"
              onClick={() => loginWithRedirect({
                connection: 'google-oauth2'
              })}
            >
              Google
            </button>
            <button 
              className="sso-button microsoft"
              onClick={() => loginWithRedirect({
                connection: 'windowslive'
              })}
            >
              Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;