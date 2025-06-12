import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [data, setData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/signup', data);
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <input placeholder="Username" onChange={e => setData({ ...data, username: e.target.value })} />
        <input type="email" placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setData({ ...data, password: e.target.value })} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', border: '1px solid #ccc' }
};

export default Signup;
