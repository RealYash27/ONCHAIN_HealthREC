import { Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Dashboard from './components/Dashboard'; // Now clean

function LandingWrapper() {
  const navigate = useNavigate();

  const handleRoleSelect = (role: 'patient' | 'doctor') => {
    localStorage.setItem('userRole', role);
    navigate('/dashboard');
  };

  return <Landing onRoleSelect={handleRoleSelect} />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingWrapper />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
