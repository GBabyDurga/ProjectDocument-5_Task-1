import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './components/Navbar';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import AdminPanel from './components/admin/AdminPanel';
import AnalystView from './components/analyst/AnalystView';
import ViewerDashboard from './components/viewer/ViewerDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <Auth0Provider
      domain="your-auth0-domain.auth0.com"
      clientId="your-client-id"
      redirectUri={window.location.origin}
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute requiredRole="admin">
                      <AdminPanel />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/analyst"
                  element={
                    <ProtectedRoute requiredRole="analyst">
                      <AnalystView />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/viewer"
                  element={
                    <ProtectedRoute requiredRole="viewer">
                      <ViewerDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </main>
          </div>
        </Router>
      </QueryClientProvider>
    </Auth0Provider>
  );
}

export default App;