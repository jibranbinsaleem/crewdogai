import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

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

  const styles: { [key: string]: React.CSSProperties } = {
    loginContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    formContainer: {
      maxWidth: '400px',
      width: '100%',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      textAlign: 'center',
    },
    h2: {
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputContainer: {
      position: 'relative',
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '5px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    icon: {
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      color: '#aaa',
    },
    button: {
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#2980b9',
    },
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <div style={styles.loginContainer}>
        <div style={styles.formContainer}>
          <h2 style={styles.h2}>Login</h2>
          <form style={styles.form} onSubmit={handleLogin}>
            <div style={styles.inputContainer}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
              <i className="fas fa-user" style={styles.icon}></i>
            </div>
            <div style={styles.inputContainer}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
              <i className="fas fa-lock" style={styles.icon}></i>
            </div>
            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}