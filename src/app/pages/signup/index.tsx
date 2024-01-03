import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

interface SignupProps {
  history: any;
}

export function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://your-backend-api/signup', {
        username,
        password,
      });
      // Assuming you want to redirect to the login page after successful signup
      // history.push('/login');
    } catch (error) {
      console.error('Signup failed', error);
      // Handle error, show a message, etc.
    }
  };

  return (
    <>
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
}

// Signup.tsx
// Signup.tsx
