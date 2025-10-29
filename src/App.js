import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';

function App() {
  const [users, setUsers] = useState([]); // Store all registered users
  const [currentUser, setCurrentUser] = useState(null);
  const [view, setView] = useState('login'); // 'login', 'register', 'profile'

  const handleRegister = (user) => {
    setUsers((prev) => [...prev, user]);
    setCurrentUser(user);
    setView('profile');
  };

  const handleLogin = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setCurrentUser(foundUser);
      setView('profile');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView('login');
  };

  const handleUpdate = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map(user => user.email === updatedUser.email ? updatedUser : user)
    );
    setCurrentUser(updatedUser);
  };

  const switchToRegister = () => setView('register');
  const switchToLogin = () => setView('login');

  return (
    <div className="App">
      {view === 'login' && <Login onLogin={handleLogin} switchToRegister={switchToRegister} />}
      {view === 'register' && <Register onRegister={handleRegister} switchToLogin={switchToLogin} />}
      {view === 'profile' && currentUser && <Profile userData={currentUser} onLogout={handleLogout} onUpdate={handleUpdate} />}
    </div>
  );
}

export default App;
