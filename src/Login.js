import React, { useState } from 'react';
import { validateEmail, validatePassword } from './utils/validation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login({ onLogin, switchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email must include @ symbol.');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must have at least 8 characters, include @ and a number.');
      return;
    }
    setError('');
    onLogin(email, password);
  };

  return (
    <div className="auth-card mx-auto">
      <h2 style={{ fontWeight: 'bold', marginBottom: '30px', color: '#314a85' }}>Login</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="email"
          className="form-control mb-4"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="input-group mb-4">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="input-group-text"
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
              minWidth: 44,
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center'
            }}
            onClick={() => setShowPassword(x => !x)}
          >
            {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </span>
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button type="submit" className="btn btn-primary w-100 mb-2">Login</button>
      </form>
      <div className="mt-2 text-center">
        Don't have an account?{' '}
        <button className="btn btn-link p-0 auth-link" onClick={switchToRegister}>Register here</button>
      </div>
    </div>
  );
}

export default Login;
