import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', data);

      if (res.data.message === 'Login success' && res.data.token) {
        // Save JWT token in localStorage
      localStorage.setItem('token', res.data.token);
      navigate('/protected'); // go to protected page after login
      } else {
        alert('Login failed: Token not received');
      }
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || error.message));
      setData(prev => ({ ...prev, password: '' }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', width: '300px' }
};

export default Login;

