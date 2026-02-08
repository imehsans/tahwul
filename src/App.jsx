import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import LoadingSpinner from './components/common/LoadingSpinner';
import useAppStore from './store';
import { mockProjects, mockDashboardStats } from './data/mockData';

// Lazy load pages for performance
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Details = lazy(() => import('./pages/Details'));
const Perspectives = lazy(() => import('./pages/Perspectives'));
const Tasks = lazy(() => import('./pages/Tasks'));
const Documents = lazy(() => import('./pages/Documents'));
const Reports = lazy(() => import('./pages/Reports'));
const Users = lazy(() => import('./pages/Users'));

// Protected Route Wrapper
const ProtectedRoute = () => {
  const { setProjects, setDashboardStats, isAuthenticated } = useAppStore();

  // Initialize mock data
  useEffect(() => {
    setProjects(mockProjects);
    setDashboardStats(mockDashboardStats);
  }, [setProjects, setDashboardStats]);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="h-screen w-full flex items-center justify-center bg-gray-50">
          <LoadingSpinner size="lg" />
        </div>
      }>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<div className="p-8">Forgot Password Page Placeholder</div>} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/perspectives" element={<Perspectives />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/users" element={<Users />} />
            <Route path="/project/:id" element={<Details />} />

            {/* Redirect legacy routes or unknown routes to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
