import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

interface LoginProps {
  history: any;
}

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Assuming you have a login API endpoint on your backend
      const response = await axios.post('http://your-backend-api/login', {
        username,
        password,
      });

      // Assuming your backend returns a token upon successful login
      const token = response.data.token;

      // You may want to store the token in local storage or a state management solution
      // localStorage.setItem('token', token);

      // Redirect to the dashboard or another page after successful login
      // history.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      // Handle error, show a message, etc.
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
