import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/signup', data);
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.error || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <input
          placeholder="Name"
          value={data.name}
          onChange={e => setData({ ...data, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={e => setData({ ...data, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={e => setData({ ...data, password: e.target.value })}
          required
        />
        <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
      </form>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', border: '1px solid #ccc' }
};

export default Signup;
