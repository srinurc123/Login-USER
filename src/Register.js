import React, { useState } from 'react';
import { validateEmail, validatePhoneNumber, validatePassword } from './utils/validation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Register({ onRegister, switchToLogin }) {
  const [userData, setUserData] = useState({
    email: '',
    phone: '',
    countryCode: '+91',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(userData.email)) {
      setError('Email must include @ symbol.');
      return;
    }
    if (!validatePhoneNumber(userData.phone)) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }
    if (!validatePassword(userData.password)) {
      setError('Password must have at least 8 characters, include @ and a number.');
      return;
    }
    if (userData.password !== userData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError('');
    onRegister(userData);
  };

  return (
    <div className="auth-card mx-auto">
      <h3>Register</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="form-control mb-4"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <div className="d-flex mb-4">
          <select
            className="form-select me-2"
            name="countryCode"
            value={userData.countryCode}
            onChange={handleChange}
            style={{ maxWidth: '130px' }}
          >
            <option value="+91">+91 (India)</option>
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+61">+61 (Australia)</option>
            <option value="+81">+81 (Japan)</option>
            <option value="+49">+49 (Germany)</option>
            <option value="+33">+33 (France)</option>
            <option value="+86">+86 (China)</option>
            <option value="+971">+971 (UAE)</option>
            <option value="+7">+7 (Russia)</option>
            <option value="+92">+92 (Pakistan)</option>
            <option value="+880">+880 (Bangladesh)</option>
            <option value="+234">+234 (Nigeria)</option>
            <option value="+63">+63 (Philippines)</option>
            <option value="+55">+55 (Brazil)</option>
            <option value="+20">+20 (Egypt)</option>
            <option value="+353">+353 (Ireland)</option>
            <option value="+27">+27 (South Africa)</option>
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Phone number"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            maxLength={10}
            required
          />
        </div>
        <div className="input-group mb-4">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
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
              justifyContent: 'center'
            }}
            onClick={() => setShowPassword(x => !x)}
          >
            {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </span>
        </div>
        <div className="input-group mb-5">
          <input
            type={showConfirm ? "text" : "password"}
            className="form-control"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
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
              justifyContent: 'center'
            }}
            onClick={() => setShowConfirm(x => !x)}
          >
            {showConfirm ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </span>
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button type="submit" className="btn btn-success w-100 mb-2">Register</button>
      </form>
      <div className="mt-2 text-center">
        Already have an account?{' '}
        <button className="btn btn-link p-0 auth-link" onClick={switchToLogin}>Login here</button>
      </div>
    </div>
  );
}

export default Register;
