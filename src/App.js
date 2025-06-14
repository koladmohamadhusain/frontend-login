import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';

// ProtectedRoute component to protect routes
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  if (!token) {
    // Redirect to login if no token found
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
       <Route path="/protected" element={
  <ProtectedRoute>
    <Home />
  </ProtectedRoute>
} />
      </Routes>
    </Router>
  );
}

export default App;
