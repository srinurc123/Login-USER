import React, { useState } from 'react';
import { validatePhoneNumber } from './utils/validation';

function Profile({ userData, onLogout, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.phone)) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }
    setError('');
    onUpdate(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData(userData);
    setError('');
    setEditMode(false);
  };

  return (
    <div className="auth-card mx-auto">
        <h6>Welcome, {userData.name} here if you want you can edit your profile Name, Number so it saves changed details forever</h6>
      <h3>Account Information</h3>
      {editMode ? (
        <form onSubmit={handleSave}>
          <input
            type="text"
            className="form-control mb-4"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="form-control mb-4"
            name="email"
            value={formData.email}
            disabled
          />
          <input
            type="text"
            className="form-control mb-4"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
            placeholder="Phone Number"
            required
          />
          {error && <div className="text-danger mb-3">{error}</div>}
          <button type="submit" className="btn btn-primary me-2">Save</button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <div>
          <p><b>Name:</b> {userData.name}</p>
          <p><b>Email:</b> {userData.email}</p>
          <p><b>Phone:</b> {userData.phone}</p>
          <button className="btn btn-warning me-2" onClick={() => setEditMode(true)}>Edit</button>
          <button className="btn btn-danger" onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
